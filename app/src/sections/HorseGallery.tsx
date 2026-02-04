import type { GeneratedImage } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Trash2, ImageIcon } from 'lucide-react';

interface HorseGalleryProps {
  images: GeneratedImage[];
  onDownload: (id: string) => void;
  onDelete: (id: string) => void;
}

export function HorseGallery({ images, onDownload, onDelete }: HorseGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-lg font-bold">
          <ImageIcon className="w-5 h-5 text-[#ff0192]" />
          <h3>我的壁纸库</h3>
          <span className="text-sm font-normal text-muted-foreground">
            ({images.length} 张)
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {images.map((image) => (
          <Card key={image.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative aspect-[9/16]">
                <img
                  src={image.dataUrl}
                  alt={image.config.foregroundText}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* 悬停遮罩 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                  <p className="text-white font-bold text-sm mb-2">
                    {image.config.foregroundText}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="icon"
                      variant="secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDownload(image.id);
                      }}
                      className="h-8 w-8"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDelete(image.id);
                      }}
                      className="h-8 w-8"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-2 text-center bg-muted/30">
                <p className="text-xs text-muted-foreground truncate">
                  {image.config.foregroundText}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
