import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Close Protection & Logistics',
  icons: {
    icon: '/images/favicon.png', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
