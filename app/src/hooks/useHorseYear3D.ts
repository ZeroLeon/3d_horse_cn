import { useState, useCallback, useRef, useEffect } from 'react';
import type { GeneratedImage } from '@/types';
import { getRandomPhrase, getRandomHorseImage, horseImages } from '@/data/horsePhrases';

// 手机壁纸尺寸 9:16 比例
const MOBILE_WIDTH = 1080;
const MOBILE_HEIGHT = 1920;

// 默认颜色配置（马年主题）
const COLORS = {
  foreground: '#ff0192',   // 玫红 - 前景文字
  background: '#00009b',   // 深蓝 - 后景文字
  middle: '#0500fc',       // 标准蓝 - 中层背景
};

// 效果参数（固定，不给用户调节）
const EFFECTS = {
  fontSize: 140,           // 前景字体大小
  bgFontSize: 180,         // 后景字体大小
  fontFamily: 'Arial Black, "Microsoft YaHei", "PingFang SC", sans-serif',
  blurAmount: 1.5,         // 后景模糊程度（轻微）
  shadowOffset: 3,         // 前景投影偏移
  horseSize: 500,          // 马图案大小
};

export function useHorseYear3D() {
  const [currentPhrase, setCurrentPhrase] = useState(() => getRandomPhrase());
  const [currentHorseImage, setCurrentHorseImage] = useState(() => getRandomHorseImage());
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const horseImageRef = useRef<HTMLImageElement | null>(null);
  const loadedHorseImageRef = useRef<string>('');

  // 预加载马图案
  useEffect(() => {
    const preloadImages = async () => {
      const loadPromises = horseImages.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        });
      });
      await Promise.all(loadPromises);
    };
    preloadImages();
  }, []);

  // 渲染Canvas
  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const { foreground, background } = currentPhrase;
    const { 
      fontSize, 
      bgFontSize,
      fontFamily, 
      blurAmount, 
      shadowOffset,
      horseSize 
    } = EFFECTS;

    // 清空画布
    ctx.clearRect(0, 0, MOBILE_WIDTH, MOBILE_HEIGHT);

    // 1. 填充中层背景（标准蓝）
    ctx.fillStyle = COLORS.middle;
    ctx.fillRect(0, 0, MOBILE_WIDTH, MOBILE_HEIGHT);

    // 2. 绘制后景文字（深蓝，轻微模糊）
    ctx.save();
    ctx.filter = `blur(${blurAmount}px)`;
    ctx.fillStyle = COLORS.background;
    ctx.font = `bold ${bgFontSize}px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    const bgLines = background.split('\n');
    const bgLineHeight = bgFontSize * 1.3;
    // 后景文字位置偏上，与前景形成错位
    const bgStartY = MOBILE_HEIGHT * 0.35 - ((bgLines.length - 1) * bgLineHeight) / 2;
    
    bgLines.forEach((line, index) => {
      ctx.fillText(line, MOBILE_WIDTH / 2, bgStartY + index * bgLineHeight);
    });
    ctx.restore();

    // 3. 绘制马图案（居中偏下）
    if (horseImageRef.current) {
      const img = horseImageRef.current;
      const aspectRatio = img.width / img.height;
      const drawWidth = horseSize;
      const drawHeight = drawWidth / aspectRatio;
      
      const horseX = (MOBILE_WIDTH - drawWidth) / 2;
      const horseY = MOBILE_HEIGHT * 0.52;
      
      ctx.drawImage(img, horseX, horseY, drawWidth, drawHeight);
    }

    // 4. 绘制前景文字（玫红，锐利2D，带投影）
    ctx.save();
    ctx.fillStyle = COLORS.foreground;
    ctx.font = `bold ${fontSize}px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // 添加投影增强立体感
    ctx.shadowColor = 'rgba(255, 1, 146, 0.6)';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = shadowOffset;
    ctx.shadowOffsetY = shadowOffset;
    
    // 前景文字位置偏下，与后景形成错位遮挡
    const fgStartY = MOBILE_HEIGHT * 0.22;
    
    // 主标题大字
    ctx.fillText(foreground, MOBILE_WIDTH / 2, fgStartY);
    
    ctx.restore();

    // 5. 添加装饰元素 - 顶部金色条纹
    ctx.save();
    const gradient = ctx.createLinearGradient(0, 0, MOBILE_WIDTH, 0);
    gradient.addColorStop(0, 'rgba(255, 215, 0, 0)');
    gradient.addColorStop(0.5, 'rgba(255, 215, 0, 0.3)');
    gradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, MOBILE_HEIGHT * 0.08, MOBILE_WIDTH, 8);
    ctx.restore();

    // 6. 添加底部装饰文字
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.font = `bold 36px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText('马年大吉 · 2026', MOBILE_WIDTH / 2, MOBILE_HEIGHT - 60);
    ctx.restore();

    return canvas.toDataURL('image/png');
  }, [currentPhrase]);

  // 生成图片并保存到历史
  const generateImage = useCallback(() => {
    const dataUrl = renderCanvas();
    if (!dataUrl) return null;
    
    const newImage: GeneratedImage = {
      id: Date.now().toString(),
      dataUrl,
      config: {
        foregroundText: currentPhrase.foreground,
        backgroundText: currentPhrase.background,
        foregroundColor: COLORS.foreground,
        backgroundColor: COLORS.background,
        middleColor: COLORS.middle,
        fontSize: EFFECTS.fontSize,
        fontFamily: EFFECTS.fontFamily,
        blurAmount: EFFECTS.blurAmount,
        shadowOffset: EFFECTS.shadowOffset,
        canvasWidth: MOBILE_WIDTH,
        canvasHeight: MOBILE_HEIGHT,
      },
      createdAt: Date.now(),
    };

    setGeneratedImages((prev) => [newImage, ...prev].slice(0, 5)); // 最多保留最近5张
    return newImage;
  }, [renderCanvas, currentPhrase]);

  // 加载马图片并渲染
  const loadHorseAndRender = useCallback((horseSrc: string) => {
    setIsGenerating(true);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      horseImageRef.current = img;
      loadedHorseImageRef.current = horseSrc;
      setTimeout(() => {
        renderCanvas();
        generateImage();
        setIsGenerating(false);
      }, 50);
    };
    img.onerror = () => {
      setIsGenerating(false);
    };
    img.src = horseSrc;
  }, [renderCanvas, generateImage]);

  // 生成随机组合
  const generateRandom = useCallback(() => {
    const phrase = getRandomPhrase();
    const horseImg = getRandomHorseImage();
    setCurrentPhrase(phrase);
    setCurrentHorseImage(horseImg);
    loadHorseAndRender(horseImg);
  }, [loadHorseAndRender]);

  // 下载当前图片
  const downloadCurrent = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `马年大吉-${currentPhrase.foreground}-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [currentPhrase]);

  // 下载历史图片
  const downloadImage = useCallback((imageId: string) => {
    const image = generatedImages.find((img) => img.id === imageId);
    if (!image) return;

    const link = document.createElement('a');
    link.href = image.dataUrl;
    link.download = `马年大吉-${image.config.foregroundText}-${image.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [generatedImages]);

  // 删除历史图片
  const deleteImage = useCallback((imageId: string) => {
    setGeneratedImages((prev) => prev.filter((img) => img.id !== imageId));
  }, []);

  // 初始加载
  useEffect(() => {
    loadHorseAndRender(currentHorseImage);
  }, []);

  return {
    currentPhrase,
    currentHorseImage,
    canvasRef,
    generatedImages,
    isGenerating,
    canvasSize: { width: MOBILE_WIDTH, height: MOBILE_HEIGHT },
    generateRandom,
    generateImage,
    downloadImage,
    downloadCurrent,
    deleteImage,
    renderCanvas,
  };
}
