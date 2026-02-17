import LocaleLayout from '@/components/shared/LocaleLayout';

export default function NlLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="nl">{children}</LocaleLayout>;
}
