import LocaleLayout from '@/components/shared/LocaleLayout';

export default function PlLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="pl">{children}</LocaleLayout>;
}
