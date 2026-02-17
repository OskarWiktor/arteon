import LocaleLayout from '@/components/shared/LocaleLayout';

export default function YoLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="yo">{children}</LocaleLayout>;
}
