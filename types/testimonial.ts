export type TestimonialSource =
  | 'google'
  | 'oferteo'
  | 'fixly'
  | 'linkedin'
  | 'mail'
  | 'other';

export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  rating: number;
  quote: string;
  source?: TestimonialSource;
  link?: string;
  projectSlug?: string;
  avatarUrl?: string;
}
