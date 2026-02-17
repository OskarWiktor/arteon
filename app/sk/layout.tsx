import LocaleLayout from '@/components/shared/LocaleLayout';

export default function SkLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="sk">{children}</LocaleLayout>;
}
