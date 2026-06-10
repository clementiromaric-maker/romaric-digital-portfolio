export const metadata = {
  title: 'Romaric Clementi | Website og digitale arbejdsgange',
  description:
    'Dansk portfolio for webbureauer, digitale teams og startups med website-produktion, struktureret indhold, genbrugelige sektioner, CMS-levering, Jira-opfølgning og QA.',
  alternates: {
    canonical: '/da/',
    languages: {
      en: '/',
      da: '/da/',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romaric Clementi | Website og digitale arbejdsgange',
    description: 'Klar digital struktur fra uklare behov.',
    images: ['/og.png'],
  },
  openGraph: {
    title: 'Romaric Clementi | Website og digitale arbejdsgange',
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
