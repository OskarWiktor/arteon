import { cn } from '@/lib/clsx';
import {
  flexCenterClasses,
  normalIconSizeClasses,
  smallIconSizeClasses,
} from '@/lib/uiClasses';
import Triangle from './icons/Triangle';

/**
 * The "go there" marker on buttons and card links: the logo's square-inscribed
 * triangle pointing to the side, with no arrow shaft or tail.
 */
const ArrowIcon = () => (
  <span
    className={cn(
      'ml-1 transition-transform group-hover:translate-x-0.5',
      flexCenterClasses,
      normalIconSizeClasses,
    )}
    aria-hidden='true'
  >
    <Triangle direction='right' className={smallIconSizeClasses} />
  </span>
);

export default ArrowIcon;
