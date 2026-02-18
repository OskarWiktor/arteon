import LocaleLayout from '@/components/shared/LocaleLayout';

export default function UkLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="uk">{children}</LocaleLayout>;
}
