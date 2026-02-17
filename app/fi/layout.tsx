import LocaleLayout from '@/components/shared/LocaleLayout';

export default function FiLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="fi">{children}</LocaleLayout>;
}
