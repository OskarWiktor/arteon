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

export default function SectionNotificationBanner({ icon, text, highlight, variant = 'info', dismissible = true }: SectionNotificationBannerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const variantClasses = {
    success: {
      bg: 'bg-success-bg',
      icon: 'text-success-icon',
      text: 'text-success-text',
      close: 'text-success-icon hover:text-success-text',
    },
    info: {
      bg: 'bg-info-bg',
      icon: 'text-info-icon',
      text: 'text-info-text',
      close: 'text-info-icon hover:text-info-text',
    },
    warning: {
      bg: 'bg-warning-bg',
      icon: 'text-warning-icon',
      text: 'text-warning-text',
      close: 'text-warning-icon hover:text-warning-text',
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
            <button type="button" onClick={() => setVisible(false)} className={styles.close} aria-label="Zamknij powiadomienie">
              <RiCloseLine className="h-5 w-5" />
            </button>
          )}
        </div>
      </Wrapper>
    </section>
  );
}
