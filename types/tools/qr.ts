export type QrDataType = 'url' | 'text' | 'vcard' | 'email' | 'phone';

export type QrOptions = {
  data: string;
  size: number;
  margin: number;
  darkColor: string;
  lightColor: string;
  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H';
};

export type VCardData = {
  firstName: string;
  lastName: string;
  organization?: string;
  phone?: string;
  email?: string;
  website?: string;
  title?: string;
  address?: string;
};

export type EmailData = {
  to: string;
  subject?: string;
  body?: string;
};
