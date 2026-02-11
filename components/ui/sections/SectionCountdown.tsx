'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Wrapper from '../Wrapper';

interface SectionCountdownProps {
  title: string;
  description?: string;
  targetDate: Date;
  btnLabel?: string;
  btnLink?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function SectionCountdown({ title, description, targetDate, btnLabel, btnLink }: SectionCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: 'dni' },
    { value: timeLeft.hours, label: 'godz.' },
    { value: timeLeft.minutes, label: 'min.' },
    { value: timeLeft.seconds, label: 'sek.' },
  ];

  return (
    <section data-section="countdown" className="bg-gradient-to-r from-error-icon to-accent-orange py-12 text-white">
      <Wrapper>
        <div className="text-center">
          <h2 className="text-2xl font-bold">{title}</h2>
          {description && <p className="mt-2 text-white/80">{description}</p>}

          <div className="mt-6 flex justify-center gap-4">
            {timeUnits.map((unit, index) => (
              <div key={index} className="rounded-xl bg-white/20 px-4 py-3">
                <p className="text-3xl font-bold">{String(unit.value).padStart(2, '0')}</p>
                <p className="text-xs text-white/70">{unit.label}</p>
              </div>
            ))}
          </div>

          {btnLabel && btnLink && (
            <Link href={btnLink} className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-medium text-error-icon transition hover:bg-white/90">
              {btnLabel}
            </Link>
          )}
        </div>
      </Wrapper>
    </section>
  );
}
