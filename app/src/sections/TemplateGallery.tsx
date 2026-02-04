import type { PresetTemplate } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Check } from 'lucide-react';

interface TemplateGalleryProps {
  templates: PresetTemplate[];
  onSelect: (template: PresetTemplate) => void;
  selectedId?: string;
}

export function TemplateGallery({ templates, onSelect, selectedId }: TemplateGalleryProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-lg font-bold">
        <Sparkles className="w-5 h-5 text-[#ff0192]" />
        <h3>预设模板</h3>
        <span className="text-sm font-normal text-muted-foreground ml-2">
          点击快速应用
        </span>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 ${
              selectedId === template.id 
                ? 'ring-2 ring-[#ff0192] shadow-lg' 
                : 'border-border'
            }`}
            onClick={() => onSelect(template)}
          >
            <CardContent className="p-4">
              <div className="aspect-square rounded-lg mb-3 flex items-center justify-center text-2xl font-black"
                style={{
                  background: `linear-gradient(135deg, ${template.config.middleColor} 0%, ${template.config.backgroundColor} 100%)`,
                  color: template.config.foregroundColor,
                  textShadow: `2px 2px 4px ${template.config.foregroundColor}80`,
                }}
              >
                {template.config.foregroundText?.charAt(0) || 'A'}
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm">{template.name}</h4>
                  {selectedId === template.id && (
                    <Check className="w-4 h-4 text-[#ff0192]" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {template.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-1 mt-2">
                {template.keywords.slice(0, 2).map((keyword) => (
                  <span 
                    key={keyword}
                    className="text-[10px] px-1.5 py-0.5 bg-muted rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
