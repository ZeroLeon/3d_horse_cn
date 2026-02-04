import type { Stereo3DConfig } from '@/types';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { 
  Type, 
  Palette, 
  SlidersHorizontal,
  Layers,
  Sparkles
} from 'lucide-react';

interface ControlPanelProps {
  config: Stereo3DConfig;
  onUpdate: (updates: Partial<Stereo3DConfig>) => void;
}

export function ControlPanel({ config, onUpdate }: ControlPanelProps) {
  return (
    <div className="space-y-6">
      {/* Text Content Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-bold">
          <Type className="w-5 h-5 text-[#ff0192]" />
          <h3>文字内容</h3>
        </div>
        
        <div className="space-y-3">
          <div>
            <Label className="text-sm font-medium mb-1.5 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff0192]" />
              前景文字 (红色 - 前进)
            </Label>
            <Textarea
              value={config.foregroundText}
              onChange={(e) => onUpdate({ foregroundText: e.target.value })}
              placeholder="输入前景文字..."
              className="min-h-[60px] resize-none font-bold"
            />
          </div>
          
          <div>
            <Label className="text-sm font-medium mb-1.5 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#00009b]" />
              后景文字 (蓝色 - 后退)
            </Label>
            <Textarea
              value={config.backgroundText}
              onChange={(e) => onUpdate({ backgroundText: e.target.value })}
              placeholder="输入后景文字..."
              className="min-h-[60px] resize-none font-bold"
            />
          </div>
        </div>
      </div>

      {/* Colors Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-bold">
          <Palette className="w-5 h-5 text-[#0500fc]" />
          <h3>颜色设置</h3>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          <div>
            <Label className="text-xs mb-1.5 block">前景色</Label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={config.foregroundColor}
                onChange={(e) => onUpdate({ foregroundColor: e.target.value })}
                className="w-10 h-10 rounded-lg border-2 cursor-pointer"
              />
              <span className="text-xs font-mono">{config.foregroundColor}</span>
            </div>
          </div>
          
          <div>
            <Label className="text-xs mb-1.5 block">中层色</Label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={config.middleColor}
                onChange={(e) => onUpdate({ middleColor: e.target.value })}
                className="w-10 h-10 rounded-lg border-2 cursor-pointer"
              />
              <span className="text-xs font-mono">{config.middleColor}</span>
            </div>
          </div>
          
          <div>
            <Label className="text-xs mb-1.5 block">后景色</Label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={config.backgroundColor}
                onChange={(e) => onUpdate({ backgroundColor: e.target.value })}
                className="w-10 h-10 rounded-lg border-2 cursor-pointer"
              />
              <span className="text-xs font-mono">{config.backgroundColor}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Effects Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-bold">
          <SlidersHorizontal className="w-5 h-5 text-[#ff0192]" />
          <h3>效果参数</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <Label className="text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                字体大小
              </Label>
              <span className="text-sm text-muted-foreground">{config.fontSize}px</span>
            </div>
            <Slider
              value={[config.fontSize]}
              onValueChange={([value]) => onUpdate({ fontSize: value })}
              min={40}
              max={150}
              step={5}
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <Label className="text-sm flex items-center gap-2">
                <Layers className="w-4 h-4" />
                模糊程度 (后层)
              </Label>
              <span className="text-sm text-muted-foreground">{config.blurAmount}px</span>
            </div>
            <Slider
              value={[config.blurAmount]}
              onValueChange={([value]) => onUpdate({ blurAmount: value })}
              min={0}
              max={10}
              step={0.5}
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <Label className="text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                投影偏移 (前层)
              </Label>
              <span className="text-sm text-muted-foreground">{config.shadowOffset}px</span>
            </div>
            <Slider
              value={[config.shadowOffset]}
              onValueChange={([value]) => onUpdate({ shadowOffset: value })}
              min={0}
              max={8}
              step={0.5}
            />
          </div>
        </div>
      </div>

      {/* Canvas Size */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-bold">
          <Layers className="w-5 h-5 text-[#0500fc]" />
          <h3>画布尺寸</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label className="text-xs mb-1.5 block">宽度</Label>
            <Input
              type="number"
              value={config.canvasWidth}
              onChange={(e) => onUpdate({ canvasWidth: parseInt(e.target.value) || 800 })}
              min={400}
              max={1600}
              step={100}
            />
          </div>
          <div>
            <Label className="text-xs mb-1.5 block">高度</Label>
            <Input
              type="number"
              value={config.canvasHeight}
              onChange={(e) => onUpdate({ canvasHeight: parseInt(e.target.value) || 600 })}
              min={300}
              max={1200}
              step={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
