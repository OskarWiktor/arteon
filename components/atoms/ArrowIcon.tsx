import {
  flexCenterClasses,
  normalIconSizeClasses,
  smallIconSizeClasses,
} from '@/lib/uiClasses';
import { cn } from '@/lib/clsx';

const ArrowIcon = () => (
  <span
    className={cn('ml-1', flexCenterClasses, normalIconSizeClasses)}
    aria-hidden='true'
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className={smallIconSizeClasses}
    >
      <path d='M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z' />
    </svg>
  </span>
);

export default ArrowIcon;
