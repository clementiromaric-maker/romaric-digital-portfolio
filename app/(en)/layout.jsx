import '../globals.css';

export const metadata = {
  metadataBase: new URL('https://romaric-digital-portfolio.clementiromaric.workers.dev'),
  title: 'Romaric Clementi | Digital Production · Web Content · QA',
  description: 'Digital production, web content implementation, CMS support, responsive QA and multilingual delivery by Romaric Clementi.',
  openGraph: {
    title: 'Romaric Clementi | Digital Production · Web Content · QA',
    description: 'Clear digital structure from unclear needs. Live website delivery, content implementation, CMS support and practical QA.',
    type: 'website',
    images: ['/assets/marzieh-homepage.webp']
  }
};

export default function EnglishLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
