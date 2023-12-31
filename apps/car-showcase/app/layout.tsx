import { Footer, Navbar } from '../components';
import './global.css';

export const metadata = {
  metadataBase: new URL('http://localhost:4200/'),
  title: {
    default: 'CarHUB',
    template: `CarHUB | %s`,
  },
  description: 'For car lover 👋',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
