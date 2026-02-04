import { forwardRef } from 'react';
import { Download, Shuffle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { HorsePhrase } from '@/data/horsePhrases';

interface HorsePreviewProps {
  phrase: HorsePhrase;
  canvasSize: { width: number; height: number };
  onDownload: () => void;
  onRandom: () => void;
  isGenerating: boolean;
}

export const HorsePreview = forwardRef<HTMLCanvasElement, HorsePreviewProps>(
  ({ phrase, canvasSize, onDownload, onRandom, isGenerating }, ref) => {
    return (
      <div className="flex flex-col gap-4">
        {/* 当前祝福语展示 */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-black text-[#ff0192]">
            {phrase.foreground}
          </h2>
          <p className="text-sm text-[#0500fc] whitespace-pre-line">
            {phrase.background}
          </p>
        </div>

        {/* Canvas预览 */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#ffd700]/50 bg-[#0500fc] mx-auto"
          style={{ maxWidth: '100%', width: 'fit-content' }}
        >
          <canvas
            ref={ref}
            width={canvasSize.width}
            height={canvasSize.height}
            className="w-full h-auto"
            style={{ 
              maxHeight: '70vh',
              maxWidth: '100%',
              objectFit: 'contain',
            }}
          />
          
          {/* 尺寸标签 */}
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
            手机壁纸 {canvasSize.width}×{canvasSize.height}
          </div>

          {/* 生成中遮罩 */}
          {isGenerating && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-[#ffd700] animate-pulse" />
            </div>
          )}
        </div>
        
        {/* 操作按钮 */}
        <div className="flex gap-3 justify-center">
          <Button
            onClick={onRandom}
            disabled={isGenerating}
            variant="outline"
            size="lg"
            className="flex items-center gap-2 px-6 border-[#0500fc] text-[#0500fc] hover:bg-[#0500fc]/10"
          >
            <Shuffle className="w-5 h-5" />
            换一换
          </Button>
          <Button
            onClick={onDownload}
            disabled={isGenerating}
            size="lg"
            className="flex items-center gap-2 px-8 bg-gradient-to-r from-[#ff0192] to-[#ff3333] hover:opacity-90 text-white shadow-lg"
          >
            <Download className="w-5 h-5" />
            下载壁纸
          </Button>
        </div>
      </div>
    );
  }
);

HorsePreview.displayName = 'HorsePreview';
