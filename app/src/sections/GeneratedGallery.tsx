import type { GeneratedImage } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Trash2, Clock } from 'lucide-react';

interface GeneratedGalleryProps {
  images: GeneratedImage[];
  onDownload: (id: string) => void;
  onDelete: (id: string) => void;
}

export function GeneratedGallery({ images, onDownload, onDelete }: GeneratedGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-lg font-bold">
          <Clock className="w-5 h-5 text-[#0500fc]" />
          <h3>生成历史</h3>
          <span className="text-sm font-normal text-muted-foreground">
            ({images.length} 张)
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {images.map((image) => (
          <Card key={image.id} className="overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <img
                  src={image.dataUrl}
                  alt="Generated 3D"
                  className="w-full h-full object-cover"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button
                    size="icon"
                    variant="secondary"
                    onClick={() => onDownload(image.id)}
                    className="h-9 w-9"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="destructive"
                    onClick={() => onDelete(image.id)}
                    className="h-9 w-9"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-2 text-center">
                <p className="text-xs text-muted-foreground">
                  {new Date(image.createdAt).toLocaleTimeString()}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
