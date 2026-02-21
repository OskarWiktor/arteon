import LocaleLayout from '@/components/shared/LocaleLayout';

export default function HiLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="hi">{children}</LocaleLayout>;
}
