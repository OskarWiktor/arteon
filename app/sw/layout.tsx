import LocaleLayout from '@/components/shared/LocaleLayout';

export default function SwLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="sw">{children}</LocaleLayout>;
}
