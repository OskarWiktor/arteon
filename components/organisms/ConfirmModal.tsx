'use client';

import { createPortal } from 'react-dom';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useIsMounted } from '@/hooks/useIsMounted';
import {
  flexCenterClasses,
  modalBackdropClasses,
  modalContentClasses,
} from '@/lib/uiClasses';
import { cn } from '@/lib/utils';
import Button from '../atoms/buttons/Button';

type ConfirmModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
};

/**
 * Render a confirmation modal that prompts the user to confirm or cancel an action.
 *
 * The modal is mounted into document.body via a portal and is only rendered when the component
 * is mounted and `isOpen` is true. It closes when the backdrop is clicked, the Escape key is
 * pressed, the cancel button is clicked, or after confirming.
 *
 * @param isOpen - Controls whether the modal is visible
 * @param onClose - Callback invoked to close the modal
 * @param onConfirm - Callback invoked when the confirm action is triggered
 * @param title - Heading text displayed at the top of the modal
 * @param description - Optional supporting text displayed below the title
 * @param confirmLabel - Label for the confirm button (default: `'Tak'`)
 * @param cancelLabel - Label for the cancel button (default: `'Anuluj'`)
 * @returns A React element rendering the modal portal when visible, or `null` otherwise
 */
export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = 'Tak',
  cancelLabel = 'Anuluj',
}: ConfirmModalProps) {
  const mounted = useIsMounted();

  useEscapeKey(onClose, isOpen);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  if (!mounted) return null;

  if (!isOpen) return null;

  return createPortal(
    <div
      className={cn(
        'fixed inset-0 z-100 bg-black/40 px-4',
        modalBackdropClasses,
        flexCenterClasses,
      )}
      onClick={handleBackdropClick}
      role='dialog'
      aria-modal='true'
      aria-labelledby='confirm-modal-title'
    >
      <div
        className={cn(
          'w-full max-w-md overflow-hidden rounded-lg bg-white p-6 shadow-lg ring-1 ring-black/5',
          modalContentClasses,
        )}
      >
        <h3 id='confirm-modal-title' className='h3 mb-2'>
          {title}
        </h3>
        {description && <p className='mb-6 text-sm'>{description}</p>}
        <div className='flex gap-3'>
          <Button variant='accent' size='small' onClick={handleConfirm}>
            {confirmLabel}
          </Button>
          <Button variant='normal' size='small' onClick={onClose}>
            {cancelLabel}
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
