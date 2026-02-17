import LocaleLayout from '@/components/shared/LocaleLayout';

export default function SlLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="sl">{children}</LocaleLayout>;
}
