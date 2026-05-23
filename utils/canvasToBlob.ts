export function canvasToBlob(
  canvas: HTMLCanvasElement,
  mimeType: string,
  quality?: number,
  errorMessage?: string,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      blob => {
        if (!blob) {
          reject(new Error(errorMessage ?? 'Failed to generate file.'));
          return;
        }
        resolve(blob);
      },
      mimeType,
      quality,
    );
  });
}
