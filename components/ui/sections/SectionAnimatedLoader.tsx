interface SectionAnimatedLoaderProps {
  variant?: 'spinner' | 'dots' | 'pulse';
  size?: 'small' | 'medium' | 'large';
}

export default function SectionAnimatedLoader({ variant = 'spinner', size = 'medium' }: SectionAnimatedLoaderProps) {
  const sizeClasses = {
    small: { container: 'h-6 w-6', dot: 'h-1.5 w-1.5', border: 'border-2' },
    medium: { container: 'h-8 w-8', dot: 'h-2 w-2', border: 'border-4' },
    large: { container: 'h-10 w-10', dot: 'h-2.5 w-2.5', border: 'border-4' },
  };

  if (variant === 'spinner') {
    return (
      <div className={`${sizeClasses[size].container} ${sizeClasses[size].border} animate-spin rounded-full border-slate-200 border-t-slate-800`} role="status" aria-label="Ładowanie...">
        <span className="sr-only">Ładowanie...</span>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="flex items-center gap-2" role="status" aria-label="Ładowanie...">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`${sizeClasses[size].dot} animate-bounce rounded-full bg-slate-800`} style={{ animationDelay: `${i * 150}ms` }} />
        ))}
        <span className="sr-only">Ładowanie...</span>
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className={`${sizeClasses[size].container} animate-pulse rounded-full bg-slate-800`} role="status" aria-label="Ładowanie...">
        <span className="sr-only">Ładowanie...</span>
      </div>
    );
  }

  return null;
}
