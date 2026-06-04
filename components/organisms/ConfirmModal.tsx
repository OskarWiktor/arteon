'use client';

import { createPortal } from 'react-dom';
import Button from '@/components/atoms/buttons/Button';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useIsMounted } from '@/hooks/useIsMounted';
import { flexCenterClasses, modalBackdropClasses, modalContentClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/utils';

type ConfirmModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
};

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
