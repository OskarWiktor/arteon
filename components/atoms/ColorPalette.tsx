interface ColorPaletteProps {
  colors: string[];
}

export default function ColorPalette({ colors }: ColorPaletteProps) {
  if (!colors || colors.length < 2 || colors.length > 6) {
    return null;
  }

  return (
    <div>
      <div className='flex gap-1'>
        {colors.map((color, index) => (
          <div
            key={index}
            className='h-10 w-10 rounded border border-neutral-200'
            style={{ backgroundColor: color }}
            title={color}
            aria-label={`Kolor ${index + 1}: ${color}`}
          />
        ))}
      </div>
    </div>
  );
}
