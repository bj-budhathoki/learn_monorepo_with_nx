import { Footer, Navbar } from '../components';
import './global.css';

export const metadata = {
  title: 'CarHUB',
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
