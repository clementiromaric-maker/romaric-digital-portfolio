export const metadata = {
  title: 'Romaric Clementi | Website og digitale arbejdsgange',
  description:
    'Dansk portfolio for webbureauer, digitale teams og startups. Romaric Clementi gør uklare behov til konkrete websites, UX-flows, QA-noter og første brugbare versioner.',
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
      'Webproduktion, UX-struktur, første brugbare versioner, workflow-prototyper, mobil QA og praktisk digital levering.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Romaric Clementi portfolio preview' }],
  },
};

export default function DanishLayout({ children }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.lang='da';" }} />
      <div lang="da">{children}</div>
    </>
  );
}
