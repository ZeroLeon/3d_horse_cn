import { useEffect } from 'react';
import { HorsePreview } from '@/sections/HorsePreview';
import { HorseGallery } from '@/sections/HorseGallery';
import { HorseInfo } from '@/sections/HorseInfo';
import { useHorseYear3D } from '@/hooks/useHorseYear3D';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { Sparkles, Gift, Zap } from 'lucide-react';

function App() {
  const {
    currentPhrase,
    canvasRef,
    generatedImages,
    isGenerating,
    canvasSize,
    generateRandom,
    downloadImage,
    downloadCurrent,
    deleteImage,
    renderCanvas,
  } = useHorseYear3D();

  // 初始渲染
  useEffect(() => {
    const timeout = setTimeout(() => {
      renderCanvas();
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const handleRandom = () => {
    generateRandom();
    toast.success('已生成新的马年祝福！', {
      icon: <Sparkles className="w-4 h-4 text-[#ffd700]" />,
    });
  };

  const handleDownload = () => {
    downloadCurrent();
    toast.success('壁纸下载成功！快去设置为手机壁纸吧~', {
      icon: <Gift className="w-4 h-4 text-[#ff0192]" />,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8e7] via-white to-[#ffe4e1]">
      <Toaster position="top-center" richColors />
      
      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Zap className="w-12 h-12 text-[#ff0192]" />
              <Sparkles className="w-5 h-5 text-[#ffd700] absolute -top-1 -right-1" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                <span className="text-[#ff0192]">马年</span>
                <span className="text-[#0500fc]">3D</span>
                <span className="text-[#ffd700]">壁纸</span>
              </h1>
              <p className="text-xs text-muted-foreground font-medium">裸眼立体 · 新年祝福</p>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Hero Section */}
        <div className="text-center py-6 sm:py-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff0192] to-[#ff3333]">
              马到成功
            </span>
            <span className="text-foreground"> · </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0500fc] to-[#00009b]">
              裸眼3D
            </span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            海量马年精选祝福语，精美骏马图案随心换
            <br />
            一键生成专属手机壁纸，无需眼镜体验立体视觉！
          </p>
        </div>

        {/* Main Preview */}
        <div className="mb-8">
          <HorsePreview
            ref={canvasRef}
            phrase={currentPhrase}
            canvasSize={canvasSize}
            onDownload={handleDownload}
            onRandom={handleRandom}
            isGenerating={isGenerating}
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-[#ffd700]/30">
            <p className="text-lg font-black text-[#ff0192]">丰富祝福语</p>
            <p className="text-xs text-muted-foreground">海量精选</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-[#ffd700]/30">
            <p className="text-lg font-black text-[#0500fc]">多样骏马图案</p>
            <p className="text-xs text-muted-foreground">精美风格</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-[#ffd700]/30">
            <p className="text-lg font-black text-[#ffd700]">高清画质</p>
            <p className="text-xs text-muted-foreground">1080P壁纸</p>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm border mb-8">
          <HorseInfo />
        </div>

        {/* Gallery */}
        {generatedImages.length > 0 && (
          <HorseGallery
            images={generatedImages}
            onDownload={downloadImage}
            onDelete={deleteImage}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              基于 Chromostereopsis 色立体错觉原理
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#ff0192]" />
                玫红前进
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#0500fc]" />
                蓝色后退
              </span>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            2026 马年大吉 · 祝您马到成功 · 万事如意
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
