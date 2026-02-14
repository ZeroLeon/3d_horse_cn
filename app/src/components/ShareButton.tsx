import { useState, useCallback } from 'react';
import { Share2, Check, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { toast } from 'sonner';
import QRCode from 'qrcode';

interface ShareButtonProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  phrase: { foreground: string; background: string };
}

export function ShareButton({ canvasRef, phrase }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [shareImageUrl, setShareImageUrl] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  // 生成分享图
  const generateShareImage = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return '';

    setIsGenerating(true);

    try {
      // 创建一个新的 canvas 用于生成分享图（缩小尺寸适合分享）
      const shareCanvas = document.createElement('canvas');
      const ctx = shareCanvas.getContext('2d');
      if (!ctx) return '';

      // 分享图尺寸：1080x1350 (4:5 比例，适合社交媒体)
      const shareWidth = 1080;
      const shareHeight = 1350;
      shareCanvas.width = shareWidth;
      shareCanvas.height = shareHeight;

      // 绘制白色背景
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, shareWidth, shareHeight);

      // 绘制原图（缩小并居中）
      const padding = 60;
      const maxImgWidth = shareWidth - padding * 2;
      const maxImgHeight = shareHeight - 300; // 留出空间给标题和二维码区域

      const imgAspectRatio = canvas.width / canvas.height;
      let drawWidth = maxImgWidth;
      let drawHeight = drawWidth / imgAspectRatio;

      if (drawHeight > maxImgHeight) {
        drawHeight = maxImgHeight;
        drawWidth = drawHeight * imgAspectRatio;
      }

      const imgX = (shareWidth - drawWidth) / 2;
      const imgY = 120;

      // 绘制圆角矩形背景
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(imgX - 10, imgY - 10, drawWidth + 20, drawHeight + 20, 20);
      ctx.fillStyle = '#f5f5f5';
      ctx.fill();
      ctx.restore();

      // 绘制原图
      ctx.drawImage(canvas, imgX, imgY, drawWidth, drawHeight);

      // 绘制标题
      ctx.save();
      ctx.fillStyle = '#ff0192';
      ctx.font = 'bold 48px "PingFang SC", "Microsoft YaHei", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('马年3D壁纸', shareWidth / 2, 60);
      ctx.restore();

      // 绘制祝福语
      ctx.save();
      ctx.fillStyle = '#333333';
      ctx.font = 'bold 36px "PingFang SC", "Microsoft YaHei", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(phrase.foreground, shareWidth / 2, shareHeight - 120);

      ctx.fillStyle = '#666666';
      ctx.font = '28px "PingFang SC", "Microsoft YaHei", sans-serif';
      const bgLines = phrase.background.split('\n');
      bgLines.forEach((line, index) => {
        ctx.fillText(line, shareWidth / 2, shareHeight - 70 + index * 36);
      });
      ctx.restore();

      // 绘制左侧提示文字
      ctx.save();
      ctx.fillStyle = '#666666';
      ctx.font = '28px "PingFang SC", "Microsoft YaHei", sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('扫码生成你的', 40, shareHeight - 100);
      ctx.fillText('专属3D壁纸', 40, shareHeight - 60);

      // 网址
      ctx.fillStyle = '#999999';
      ctx.font = '20px "PingFang SC", "Microsoft YaHei", sans-serif';
      ctx.fillText(window.location.host, 40, shareHeight - 20);
      ctx.restore();

      // 生成并绘制二维码
      const qrSize = 120;
      const qrX = shareWidth - qrSize - 40;
      const qrY = shareHeight - qrSize - 40;

      try {
        const qrDataUrl = await QRCode.toDataURL(window.location.href, {
          width: qrSize,
          margin: 1,
          color: {
            dark: '#000000',
            light: '#ffffff',
          },
        });

        const qrImg = new Image();
        await new Promise((resolve, reject) => {
          qrImg.onload = resolve;
          qrImg.onerror = reject;
          qrImg.src = qrDataUrl;
        });

        // 绘制二维码白色边框
        ctx.save();
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(qrX - 10, qrY - 10, qrSize + 20, qrSize + 20);
        ctx.restore();

        // 绘制二维码
        ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);
      } catch {
        // 二维码生成失败时不影响主图
      }

      return shareCanvas.toDataURL('image/png');
    } finally {
      setIsGenerating(false);
    }
  }, [canvasRef, phrase]);

  // 原生分享
  const handleNativeShare = useCallback(async () => {
    const shareData = {
      title: '马年3D壁纸 - ' + phrase.foreground,
      text: `我在马年3D壁纸生成了「${phrase.foreground}」，快来看看！`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        toast.success('分享成功！');
      } catch (err) {
        // 用户取消分享，不做处理
      }
    } else {
      // 不支持原生分享，打开弹窗
      const imageUrl = await generateShareImage();
      if (imageUrl) {
        setShareImageUrl(imageUrl);
      }
    }
  }, [phrase, generateShareImage]);

  // 复制链接
  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success('链接已复制！');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('复制失败，请手动复制');
    }
  }, []);

  // 下载分享图
  const handleDownloadShareImage = useCallback(() => {
    if (!shareImageUrl) return;

    const link = document.createElement('a');
    link.href = shareImageUrl;
    link.download = `马年3D壁纸分享-${phrase.foreground}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('分享图已下载！');
  }, [shareImageUrl, phrase]);

  // 如果是移动端且支持原生分享，直接显示分享按钮
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const supportsNativeShare = typeof navigator.share === 'function';

  if (isMobile && supportsNativeShare) {
    return (
      <Button
        onClick={handleNativeShare}
        variant="outline"
        size="lg"
        className="flex items-center gap-2 px-6 border-[#ffd700] text-[#ffd700] hover:bg-[#ffd700]/10"
      >
        <Share2 className="w-5 h-5" />
        分享
      </Button>
    );
  }

  // 桌面端显示分享弹窗
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="flex items-center gap-2 px-6 border-[#ffd700] text-[#ffd700] hover:bg-[#ffd700]/10"
          onClick={async () => {
            const imageUrl = await generateShareImage();
            if (imageUrl) {
              setShareImageUrl(imageUrl);
            }
          }}
        >
          <Share2 className="w-5 h-5" />
          分享
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>分享你的3D壁纸</DialogTitle>
          <DialogDescription>
            保存图片或复制链接分享给朋友
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* 分享图预览 */}
          {shareImageUrl ? (
            <div className="rounded-lg overflow-hidden border">
              <img
                src={shareImageUrl}
                alt="分享预览"
                className="w-full h-auto"
              />
            </div>
          ) : (
            <div className="h-40 flex items-center justify-center bg-muted rounded-lg">
              {isGenerating ? '生成中...' : '点击生成分享图'}
            </div>
          )}

          {/* 操作按钮 */}
          <div className="flex gap-2">
            <Button
              onClick={handleDownloadShareImage}
              disabled={!shareImageUrl}
              className="flex-1 bg-gradient-to-r from-[#ff0192] to-[#ff3333] hover:opacity-90"
            >
              <Share2 className="w-4 h-4 mr-2" />
              下载分享图
            </Button>

            <Button
              onClick={handleCopyLink}
              variant="outline"
              className="flex-1"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  已复制
                </>
              ) : (
                <>
                  <Link2 className="w-4 h-4 mr-2" />
                  复制链接
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
