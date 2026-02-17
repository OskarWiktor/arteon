import LocaleLayout from '@/components/shared/LocaleLayout';

export default function RoLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="ro">{children}</LocaleLayout>;
}
