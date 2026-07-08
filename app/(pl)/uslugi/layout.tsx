import FloatingCallButton from '@/components/atoms/buttons/FloatingCallButton';

/**
 * Wraps every service page under /uslugi so the floating call button appears
 * there (and nowhere else on the site).
 */
export default function UslugiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <FloatingCallButton />
    </>
  );
}
