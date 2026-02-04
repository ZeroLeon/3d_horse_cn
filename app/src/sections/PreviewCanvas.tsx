import { forwardRef } from 'react';
import type { Stereo3DConfig } from '@/types';
import { Download, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PreviewCanvasProps {
  config: Stereo3DConfig;
  onDownload: () => void;
  onRegenerate: () => void;
}

export const PreviewCanvas = forwardRef<HTMLCanvasElement, PreviewCanvasProps>(
  ({ config, onDownload, onRegenerate }, ref) => {
    return (
      <div className="flex flex-col gap-4">
        <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/50 bg-white">
          <canvas
            ref={ref}
            width={config.canvasWidth}
            height={config.canvasHeight}
            className="w-full h-auto max-w-full"
            style={{ 
              maxHeight: '60vh',
              objectFit: 'contain',
              background: config.middleColor 
            }}
          />
          
          {/* Overlay info */}
          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
            {config.canvasWidth} × {config.canvasHeight}
          </div>
        </div>
        
        <div className="flex gap-3 justify-center">
          <Button
            onClick={onRegenerate}
            variant="outline"
            className="flex items-center gap-2 px-6"
          >
            <RefreshCw className="w-4 h-4" />
            重新生成
          </Button>
          <Button
            onClick={onDownload}
            className="flex items-center gap-2 px-6 bg-gradient-to-r from-[#ff0192] to-[#ff3333] hover:opacity-90 text-white"
          >
            <Download className="w-4 h-4" />
            下载图片
          </Button>
        </div>
      </div>
    );
  }
);

PreviewCanvas.displayName = 'PreviewCanvas';
