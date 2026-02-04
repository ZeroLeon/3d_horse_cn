export interface Stereo3DConfig {
  foregroundText: string;
  backgroundText: string;
  foregroundColor: string;
  backgroundColor: string;
  middleColor: string;
  fontSize: number;
  fontFamily: string;
  blurAmount: number;
  shadowOffset: number;
  canvasWidth: number;
  canvasHeight: number;
}

export interface PresetTemplate {
  id: string;
  name: string;
  description: string;
  config: Partial<Stereo3DConfig>;
  keywords: string[];
}

export interface GeneratedImage {
  id: string;
  dataUrl: string;
  config: Stereo3DConfig;
  createdAt: number;
}
