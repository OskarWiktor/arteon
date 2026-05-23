interface ShimmerProps {
  className?: string;
}

export default function Shimmer({ className = '' }: ShimmerProps) {
  return <div className={`animate-pulse rounded-lg bg-neutral-100 ${className}`} />;
}
