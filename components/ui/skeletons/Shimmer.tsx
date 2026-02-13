interface ShimmerProps {
  className?: string;
}

export default function Shimmer({ className = '' }: ShimmerProps) {
  return <div className={`animate-pulse rounded-xl bg-neutral-100 ${className}`} />;
}
