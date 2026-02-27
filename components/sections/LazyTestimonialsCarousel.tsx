'use client';

import dynamic from 'next/dynamic';
import type { Testimonial } from '@/types/testimonial';

const TestimonialsCarousel = dynamic(() => import('./TestimonialsCarousel'), { ssr: false });

type Props = {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  ids?: string[];
  max?: number;
  variant?: 'default' | 'large';
};

export default function LazyTestimonialsCarousel(props: Props) {
  return <TestimonialsCarousel {...props} />;
}
