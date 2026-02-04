import { Glasses, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Glasses className="w-10 h-10 text-[#ff0192]" />
            <Sparkles className="w-4 h-4 text-[#0500fc] absolute -top-1 -right-1" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              <span className="text-[#ff0192]">裸眼</span>
              <span className="text-[#0500fc]">3D</span>
            </h1>
            <p className="text-xs text-muted-foreground font-medium">图片生成器</p>
          </div>
        </div>
        
        <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-[#ff0192]" />
          <span>色差效应</span>
          <span className="w-2 h-2 rounded-full bg-[#0500fc] ml-2" />
          <span>立体视觉</span>
        </div>
      </div>
    </header>
  );
}
