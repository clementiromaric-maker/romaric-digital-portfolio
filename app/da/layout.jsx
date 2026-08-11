export const metadata = {
  title: 'Romaric Clementi | Digital produktion · Webindhold · QA',
  description:
    'Dansk portfolio for webbureauer og digitale teams med website-produktion, struktureret indhold, CMS-implementering, responsiv QA og flersproget levering.',
  alternates: {
    canonical: '/da/',
    languages: {
      en: '/',
      da: '/da/',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romaric Clementi | Digital produktion · Webindhold · QA',
    description: 'Klar digital struktur fra uklare behov.',
    images: ['/og.png'],
  },
  openGraph: {
    title: 'Romaric Clementi | Digital produktion · Webindhold · QA',
    description:
      'Webproduktion, struktureret indhold, CMS-workflows, genbrugelige sektioner, Jira-opfølgning, mobil QA og praktisk digital levering.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Romaric Clementi portfolio preview' }],
  },
};

export default function DanishLayout({ children }) {
  return (
    <div lang="da">{children}</div>
  );
}
