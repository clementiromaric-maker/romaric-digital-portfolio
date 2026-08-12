export const metadata = {
  title: 'Romaric Clementi | Digital produktion · Indholdssystemer · Web & QA',
  description:
    'Dansk portfolio for webbureauer og digitale teams med indholdssystemer, brandimplementering, website-produktion, CMS-workflows, lokale søgefundamenter, responsiv QA og flersproget levering.',
  alternates: {
    canonical: '/da/',
    languages: {
      en: '/',
      da: '/da/',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romaric Clementi | Digital produktion · Indholdssystemer · Web & QA',
    description: 'Klar digital struktur fra uklare behov.',
    images: ['/og.png'],
  },
  openGraph: {
    title: 'Romaric Clementi | Digital produktion · Indholdssystemer · Web & QA',
    description:
      'Research-til-release digitalt arbejde med brandimplementering, struktureret indhold, website-produktion, lokale søgefundamenter, CMS-workflows, mobil QA og praktisk overdragelse.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Romaric Clementi portfolio preview' }],
  },
};

export default function DanishLayout({ children }) {
  return (
    <div lang="da">{children}</div>
  );
}
