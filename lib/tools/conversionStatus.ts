/** Resolve the localized label for a file/page conversion status (e.g. pending/idle, processing, done, error). */
export function getConversionStatusLabel<S extends string>(
  status: S,
  labels: Record<S, string>,
): string {
  return labels[status];
}

/** Resolve the Badge variant matching a conversion status. */
export function getConversionStatusBadgeVariant(
  status: 'done' | 'error' | string,
): 'success' | 'error' | 'neutral' {
  if (status === 'done') return 'success';
  if (status === 'error') return 'error';
  return 'neutral';
}
