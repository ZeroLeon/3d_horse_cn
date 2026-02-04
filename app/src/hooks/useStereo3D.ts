import { useState, useCallback, useRef, useEffect } from 'react';
import type { Stereo3DConfig, PresetTemplate, GeneratedImage } from '@/types';

const defaultConfig: Stereo3DConfig = {
  foregroundText: '裸眼3D',
  backgroundText: 'STEREO\nSCOPIC',
  foregroundColor: '#ff0192',
  backgroundColor: '#00009b',
  middleColor: '#0500fc',
  fontSize: 80,
  fontFamily: 'Arial Black, sans-serif',
  blurAmount: 4,
  shadowOffset: 2,
  canvasWidth: 800,
  canvasHeight: 600,
};

const presetTemplates: PresetTemplate[] = [
  {
    id: 'cyber-punk',
    name: '赛博朋克',
    description: '霓虹灯光下的未来科技感',
    keywords: ['CYBER', 'PUNK', '未来', '科技'],
    config: {
      foregroundText: 'CYBER',
      backgroundText: 'PUNK\n2077',
      foregroundColor: '#ff0192',
      backgroundColor: '#00009b',
      middleColor: '#0500fc',
      fontSize: 100,
    },
  },
  {
    id: 'love-depth',
    name: '爱的深度',
    description: '浪漫的双层文字效果',
    keywords: ['LOVE', '爱心', '浪漫'],
    config: {
      foregroundText: 'LOVE',
      backgroundText: 'FOREVER\n❤',
      foregroundColor: '#ff3333',
      backgroundColor: '#00009b',
      middleColor: '#0500fc',
      fontSize: 90,
    },
  },
  {
    id: 'game-on',
    name: '游戏开始',
    description: '充满活力的游戏风格',
    keywords: ['GAME', '游戏', '开始'],
    config: {
      foregroundText: 'GAME',
      backgroundText: 'START\nNOW',
      foregroundColor: '#ff0192',
      backgroundColor: '#000066',
      middleColor: '#0500fc',
      fontSize: 110,
    },
  },
  {
    id: 'dream-big',
    name: '追逐梦想',
    description: '激励人心的励志文字',
    keywords: ['DREAM', '梦想', '励志'],
    config: {
      foregroundText: 'DREAM',
      backgroundText: 'BIG\nGO',
      foregroundColor: '#ff3333',
      backgroundColor: '#00009b',
      middleColor: '#0500fc',
      fontSize: 95,
    },
  },
  {
    id: 'cool-vibe',
    name: '酷炫风格',
    description: '街头潮流文化风格',
    keywords: ['COOL', '酷炫', '潮流'],
    config: {
      foregroundText: 'COOL',
      backgroundText: 'VIBE\n✦',
      foregroundColor: '#ff0192',
      backgroundColor: '#000066',
      middleColor: '#0500fc',
      fontSize: 105,
    },
  },
  {
    id: 'tech-wave',
    name: '科技浪潮',
    description: '数字化时代的视觉冲击',
    keywords: ['TECH', '科技', '数字'],
    config: {
      foregroundText: 'TECH',
      backgroundText: 'WAVE\n01',
      foregroundColor: '#ff3333',
      backgroundColor: '#00009b',
      middleColor: '#0500fc',
      fontSize: 100,
    },
  },
];

export function useStereo3D() {
  const [config, setConfig] = useState<Stereo3DConfig>(defaultConfig);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const updateConfig = useCallback((updates: Partial<Stereo3DConfig>) => {
    setConfig((prev) => ({ ...prev, ...updates }));
  }, []);

  const applyTemplate = useCallback((template: PresetTemplate) => {
    setConfig((prev) => ({ ...prev, ...template.config }));
  }, []);

  const generateImage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const { 
      foregroundText, 
      backgroundText, 
      foregroundColor, 
      backgroundColor, 
      middleColor,
      fontSize, 
      fontFamily, 
      blurAmount, 
      shadowOffset,
      canvasWidth,
      canvasHeight 
    } = config;

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Fill middle layer (background基调)
    ctx.fillStyle = middleColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw background text (后层 - 深蓝，高斯模糊)
    ctx.save();
    ctx.filter = `blur(${blurAmount}px)`;
    ctx.fillStyle = backgroundColor;
    ctx.font = `bold ${fontSize * 1.2}px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    const bgLines = backgroundText.split('\n');
    const lineHeight = fontSize * 1.4;
    const startY = canvasHeight / 2 - ((bgLines.length - 1) * lineHeight) / 2;
    
    bgLines.forEach((line, index) => {
      ctx.fillText(line, canvasWidth / 2, startY + index * lineHeight);
    });
    ctx.restore();

    // Draw foreground text (前层 - 玫红/亮红，投影分离)
    ctx.save();
    ctx.fillStyle = foregroundColor;
    ctx.font = `bold ${fontSize}px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Add shadow for separation effect
    ctx.shadowColor = foregroundColor;
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = shadowOffset;
    ctx.shadowOffsetY = shadowOffset;
    
    const fgLines = foregroundText.split('\n');
    const fgLineHeight = fontSize * 1.2;
    const fgStartY = canvasHeight / 2 - ((fgLines.length - 1) * fgLineHeight) / 2;
    
    fgLines.forEach((line, index) => {
      ctx.fillText(line, canvasWidth / 2, fgStartY + index * fgLineHeight);
    });
    ctx.restore();

    // Generate data URL
    const dataUrl = canvas.toDataURL('image/png');
    
    const newImage: GeneratedImage = {
      id: Date.now().toString(),
      dataUrl,
      config: { ...config },
      createdAt: Date.now(),
    };

    setGeneratedImages((prev) => [newImage, ...prev]);
    return newImage;
  }, [config]);

  const downloadImage = useCallback((imageId: string) => {
    const image = generatedImages.find((img) => img.id === imageId);
    if (!image) return;

    const link = document.createElement('a');
    link.href = image.dataUrl;
    link.download = `stereo3d-${imageId}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [generatedImages]);

  const downloadCurrent = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `stereo3d-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const deleteImage = useCallback((imageId: string) => {
    setGeneratedImages((prev) => prev.filter((img) => img.id !== imageId));
  }, []);

  // Auto-generate on config change
  useEffect(() => {
    const timeout = setTimeout(() => {
      generateImage();
    }, 300);
    return () => clearTimeout(timeout);
  }, [config, generateImage]);

  return {
    config,
    canvasRef,
    generatedImages,
    presetTemplates,
    updateConfig,
    applyTemplate,
    generateImage,
    downloadImage,
    downloadCurrent,
    deleteImage,
  };
}
