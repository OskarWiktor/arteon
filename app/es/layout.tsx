import LocaleLayout from '@/components/shared/LocaleLayout';

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="es">{children}</LocaleLayout>;
}
