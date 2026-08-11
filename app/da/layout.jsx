import '../globals.css';

export const metadata = {
  metadataBase: new URL('https://romaric-digital-portfolio.clementiromaric.workers.dev'),
  title: 'Romaric Clementi | Digital produktion · webindhold · QA',
  description: 'Digital produktion, webindhold, CMS-support, responsiv QA og flersproget levering.',
  openGraph: {
    title: 'Romaric Clementi | Digital produktion · webindhold · QA',
    description: 'Klar digital struktur fra uklare behov. Websiteproduktion, indhold, CMS-support og praktisk QA.',
    type: 'website',
    images: ['/assets/marzieh-homepage.webp']
  }
};

export default function DanishLayout({ children }) {
  return <html lang="da"><body>{children}</body></html>;
}
