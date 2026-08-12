export const metadata = {
  title: 'Romaric Clementi | Teknisk indkøb, planlægning og ERP',
  description: 'Portfolio med dokumenteret erfaring inden for teknisk indkøb, materialeplanlægning, leverandørbeslutninger, Dynamics AX/D365, stamdata, kvalitet og produktionsparathed, med en tydelig retning mod større sourcingansvar.',
  alternates: { canonical: '/da/', languages: { en: '/', da: '/da/' } },
  openGraph: {
    title: 'Romaric Clementi | Teknisk indkøb, planlægning og ERP',
    description: 'Dokumenteret erfaring med teknisk indkøb, planlægning og ERP, med en tydelig retning mod større ansvar for sourcing og leverandørudvikling.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Romaric Clementi portfolio for teknisk indkøb, planlægning, ERP og stamdata' }],
  },
  twitter: { card: 'summary_large_image', title: 'Romaric Clementi | Teknisk indkøb, planlægning og ERP', description: 'Dokumenteret erfaring med teknisk indkøb, planlægning og ERP, med en tydelig retning mod større ansvar for sourcing og leverandørudvikling.', images: ['/og.png'] },
};

export default function DanishLayout({ children }) {
  return <><script dangerouslySetInnerHTML={{ __html: "document.documentElement.lang='da';" }} /><div lang="da">{children}</div></>;
}
