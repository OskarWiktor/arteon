export type ResizeMode = 'pixels' | 'preset';
export type OutputFormat = 'jpg' | 'png' | 'webp';
export type GridColor = 'emerald' | 'white' | 'black' | 'red' | 'yellow';
export type ActiveTool = 'dimensions' | 'presets' | 'shapes' | 'zoom' | 'position' | 'grid';

export type ShapeType = 'rect' | 'square' | 'circle';
export type ShapeAspect = '1:1' | '4:5' | '5:4' | '3:2' | '2:3' | '16:9' | '9:16';

export type Dims = {
  width: number;
  height: number;
};
