'use client';

import { useState, type ReactNode } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import Wrapper from '../Wrapper';

interface SectionNotificationBannerProps {
  icon: ReactNode;
  text: string;
  highlight?: string;
  variant?: 'success' | 'info' | 'warning';
  dismissible?: boolean;
}

export default function SectionNotificationBanner({
  icon,
  text,
  highlight,
  variant = 'info',
  dismissible = true,
}: SectionNotificationBannerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const variantClasses = {
    success: {
      bg: 'bg-emerald-50',
      icon: 'text-emerald-600',
      text: 'text-emerald-800',
      close: 'text-emerald-600 hover:text-emerald-800',
    },
    info: {
      bg: 'bg-blue-50',
      icon: 'text-blue-600',
      text: 'text-blue-800',
      close: 'text-blue-600 hover:text-blue-800',
    },
    warning: {
      bg: 'bg-amber-50',
      icon: 'text-amber-600',
      text: 'text-amber-800',
      close: 'text-amber-600 hover:text-amber-800',
    },
  };

  const styles = variantClasses[variant];

  return (
    <section data-section="notification-banner" className={`rounded-2xl p-4 ${styles.bg}`}>
      <Wrapper>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className={styles.icon}>{icon}</span>
            <p className={`text-sm ${styles.text}`}>
              {highlight && <strong>{highlight} </strong>}
              {text}
            </p>
          </div>
          {dismissible && (
            <button
              type="button"
              onClick={() => setVisible(false)}
              className={styles.close}
              aria-label="Zamknij powiadomienie"
            >
              <RiCloseLine className="h-5 w-5" />
            </button>
          )}
        </div>
      </Wrapper>
    </section>
  );
}
