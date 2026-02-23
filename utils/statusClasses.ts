export type LengthStatus = 'empty' | 'too-short' | 'ideal' | 'too-long';

export function getStatusClasses(status: LengthStatus): string {
  switch (status) {
    case 'ideal':
      return 'bg-success-bg text-success-text border-success-border';
    case 'too-short':
      return 'bg-warning-bg text-warning-text border-warning-border';
    case 'too-long':
      return 'bg-error-bg text-error-text border-error-border';
    case 'empty':
    default:
      return 'bg-neutral-100 text-mid border-neutral-200';
  }
}
