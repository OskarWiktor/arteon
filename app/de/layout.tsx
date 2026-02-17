import LocaleLayout from '@/components/shared/LocaleLayout';

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="de">{children}</LocaleLayout>;
}
