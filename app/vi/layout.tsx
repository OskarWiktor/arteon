import LocaleLayout from '@/components/shared/LocaleLayout';

export default function ViLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="vi">{children}</LocaleLayout>;
}
