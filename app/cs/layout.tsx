import LocaleLayout from '@/components/shared/LocaleLayout';

export default function CsLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="cs">{children}</LocaleLayout>;
}
