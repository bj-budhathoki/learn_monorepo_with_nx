import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Navbar } from './components';
export const metadata = {
  title: 'Welcome to multi-lang',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}) {
  const locale = useLocale();
  if (params?.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
