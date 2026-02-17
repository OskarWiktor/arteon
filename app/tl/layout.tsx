import LocaleLayout from '@/components/shared/LocaleLayout';

export default function TlLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="tl">{children}</LocaleLayout>;
}
