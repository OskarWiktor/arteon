import LocaleLayout from '@/components/shared/LocaleLayout';

export default function BgLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="bg">{children}</LocaleLayout>;
}
