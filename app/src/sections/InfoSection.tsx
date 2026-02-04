import { 
  Glasses, 
  Eye, 
  Lightbulb, 
  Info,
  ChevronRight
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function InfoSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-lg font-bold">
        <Info className="w-5 h-5 text-[#0500fc]" />
        <h3>关于裸眼3D</h3>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="principle">
          <AccordionTrigger className="text-left">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-[#ff0192]" />
              <span>科学原理是什么？</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-2">
            <p>
              裸眼3D效果基于<strong>色立体错觉（Chromostereopsis）</strong>原理：
            </p>
            <ul className="space-y-1 ml-4">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff0192] mt-1.5 shrink-0" />
                <span><strong>红色/粉色</strong>光波长较长 → 大脑感知为"前进"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0500fc] mt-1.5 shrink-0" />
                <span><strong>蓝色</strong>光波长较短 → 大脑感知为"后退"</span>
              </li>
            </ul>
            <p>
              结合高斯模糊和投影分离技术，产生强烈的立体纵深感。
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="how-to-use">
          <AccordionTrigger className="text-left">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#0500fc]" />
              <span>如何获得最佳效果？</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-2">
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" />
                <span>使用<strong>粗体字</strong>，细字体会抵消错觉效果</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" />
                <span>保持适当的观看距离（30-50cm）</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" />
                <span>让眼睛自然放松，不要刻意聚焦</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" />
                <span>在光线充足的环境下观看效果更佳</span>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tips">
          <AccordionTrigger className="text-left">
            <div className="flex items-center gap-2">
              <Glasses className="w-4 h-4 text-[#ff0192]" />
              <span>设计技巧</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-2">
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" />
                <span>前景文字简洁有力，后景文字可以复杂一些</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" />
                <span>调整模糊程度和投影偏移来增强立体感</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" />
                <span>尝试不同的颜色组合创造独特效果</span>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
