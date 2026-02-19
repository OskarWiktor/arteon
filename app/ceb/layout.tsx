import LocaleLayout from '@/components/shared/LocaleLayout';

export default function CebLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="ceb">{children}</LocaleLayout>;
}
