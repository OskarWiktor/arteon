'use client';

import { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import Button from '@/components/ui/buttons/Button';

type ConfirmModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
};

export default function ConfirmModal({ isOpen, onClose, onConfirm, title, description, confirmLabel = 'Tak', cancelLabel = 'Anuluj' }: ConfirmModalProps) {
  const [mounted, setMounted] = useState(false);

  useEscapeKey(onClose, isOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  const handleConfirm = useCallback(() => {
    onConfirm();
    onClose();
  }, [onConfirm, onClose]);

  if (!mounted) return null;

  if (!isOpen) return null;

  return createPortal(
    <div
      className="animate-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-modal-title"
    >
      <div className="animate-modal-content w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5">
        <h3 id="confirm-modal-title" className="h3 mb-2">
          {title}
        </h3>
        {description && <p className="text-mid mb-6 text-sm">{description}</p>}
        <div className="flex gap-3">
          <Button variant="accent" size="small" onClick={handleConfirm}>
            {confirmLabel}
          </Button>
          <Button variant="normal" size="small" onClick={onClose}>
            {cancelLabel}
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
