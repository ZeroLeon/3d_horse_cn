import { 
  Zap,
  Eye, 
  Lightbulb, 
  Info,
  ChevronRight,
  Sparkles,
  Smartphone
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function HorseInfo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-lg font-bold">
        <Info className="w-5 h-5 text-[#0500fc]" />
        <h3>关于马年3D壁纸</h3>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="principle">
          <AccordionTrigger className="text-left">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-[#ff0192]" />
              <span>裸眼3D是什么原理？</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-2">
            <p>
              基于<strong>色立体错觉（Chromostereopsis）</strong>科学原理：
            </p>
            <ul className="space-y-1 ml-4">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff0192] mt-1.5 shrink-0" />
                <span><strong>玫红色</strong>光波长较长 → 大脑感知为"前进"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0500fc] mt-1.5 shrink-0" />
                <span><strong>蓝色</strong>光波长较短 → 大脑感知为"后退"</span>
              </li>
            </ul>
            <p>
              前后景文字错位遮挡，产生强烈的立体纵深感，无需眼镜即可体验3D效果！
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="how-to-use">
          <AccordionTrigger className="text-left">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#0500fc]" />
              <span>如何获得最佳3D效果？</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-2">
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" />
                <span>保持<strong>30-50cm</strong>的观看距离</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" />
                <span>让眼睛<strong>自然放松</strong>，不要刻意聚焦</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" />
                <span>在<strong>光线充足</strong>的环境下观看效果更佳</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" />
                <span>稍微<strong>左右移动</strong>手机，立体感会更明显</span>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="wallpaper">
          <AccordionTrigger className="text-left">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#ff0192]" />
              <span>如何设置为手机壁纸？</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-2">
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#ff0192]">1.</span>
                <span>点击"下载壁纸"按钮保存图片</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#ff0192]">2.</span>
                <span>打开手机相册，找到下载的图片</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#ff0192]">3.</span>
                <span>点击"更多"或"设为"选项</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#ff0192]">4.</span>
                <span>选择"设为壁纸"→"主屏幕"或"锁屏"</span>
              </li>
            </ul>
            <p className="text-sm bg-[#ffd700]/20 p-2 rounded mt-2">
              <Sparkles className="w-4 h-4 inline mr-1 text-[#ffd700]" />
              尺寸已优化为 1080×1920，适配绝大多数手机屏幕！
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="horse-year">
          <AccordionTrigger className="text-left">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#0500fc]" />
              <span>马年有什么寓意？</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-2">
            <p>
              马在中国文化中象征着<strong>速度、力量、成功</strong>和<strong>进取精神</strong>。
            </p>
            <ul className="space-y-1 ml-4">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffd700] mt-1.5 shrink-0" />
                <span><strong>马到成功</strong> - 事业顺利，一举成功</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffd700] mt-1.5 shrink-0" />
                <span><strong>龙马精神</strong> - 精力充沛，活力四射</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffd700] mt-1.5 shrink-0" />
                <span><strong>一马当先</strong> - 勇争第一，领先他人</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffd700] mt-1.5 shrink-0" />
                <span><strong>万马奔腾</strong> - 事业兴旺，势不可挡</span>
              </li>
            </ul>
            <p>
              2026马年，祝您如骏马般奔腾向前，事业腾飞！
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
