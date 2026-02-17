import LocaleLayout from '@/components/shared/LocaleLayout';

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="en">{children}</LocaleLayout>;
}
