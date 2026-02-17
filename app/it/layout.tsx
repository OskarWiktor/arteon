import LocaleLayout from '@/components/shared/LocaleLayout';

export default function ItLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="it">{children}</LocaleLayout>;
}
