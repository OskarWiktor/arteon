import LocaleLayout from '@/components/shared/LocaleLayout';

export default function SvLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="sv">{children}</LocaleLayout>;
}
