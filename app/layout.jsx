import './globals.css';

export const metadata = {
  metadataBase: new URL('https://romaric-digital-portfolio.clementiromaric.workers.dev'),
  title: 'Romaric Clementi | Digital Production · Web Content · QA',
  description: 'Digital production, web content implementation, CMS support, responsive QA and multilingual delivery by Romaric Clementi.',
  authors: [{ name: 'Romaric Clementi' }],
  creator: 'Romaric Clementi',
  openGraph: {
    title: 'Romaric Clementi | Digital Production · Web Content · QA',
    description: 'Clear digital structure from unclear needs. Live website delivery, content implementation, CMS support and practical QA.',
    type: 'website',
    images: ['/assets/marzieh-homepage.webp']
  },
  robots: { index: true, follow: true }
};

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#f5f1e8' };

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
