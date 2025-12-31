'use client';

import { useEffect, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 px-4 backdrop-blur-[1px]"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5"
          >
            <h3 id="confirm-modal-title" className="h4 mb-2">
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
