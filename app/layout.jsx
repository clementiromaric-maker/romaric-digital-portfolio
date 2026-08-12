import './globals.css';
import { site } from './content';

export const metadata = {
  metadataBase: new URL(site.url),
  title: 'Romaric Clementi | Technical Procurement, Materials Planning, ERP & Business Systems',
  description: 'Portfolio with documented experience in technical procurement, materials and supply planning, Dynamics AX/D365, master data, business systems, quality and production readiness, with clear sourcing authority boundaries.',
  authors: [{ name: 'Romaric Clementi' }],
  creator: 'Romaric Clementi',
  publisher: 'Romaric Clementi',
  alternates: { canonical: '/', languages: { en: '/', da: '/da/' } },
  openGraph: {
    title: 'Romaric Clementi | Technical Procurement, Materials Planning, ERP & Business Systems',
    description: 'Documented technical procurement, materials planning, ERP/master-data and business-systems experience, with clear evidence and sourcing authority boundaries.',
    type: 'website',
    url: '/',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Romaric Clementi technical procurement, supply planning, ERP and master-data portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romaric Clementi | Technical Procurement, Materials Planning, ERP & Business Systems',
    description: 'Documented technical procurement, materials planning, ERP/master-data and business-systems experience, with clear evidence and sourcing authority boundaries.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#F2EEE4',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Romaric Clementi',
  email: `mailto:${site.email}`,
  telephone: site.phone,
  address: { '@type': 'PostalAddress', addressLocality: 'Tune / Greater Copenhagen', addressCountry: 'DK' },
  jobTitle: 'Technical Procurement and Supplier Operations Professional',
  url: site.url,
  mainEntityOfPage: site.url,
  knowsAbout: [
    'Dynamics AX', 'Dynamics 365', 'ERP master data', 'MRP follow-up', 'BOMs and routings',
    'Planning parameters', 'Broad technical purchasing', 'Surface-treatment and special-process procurement', 'External testing and inspection coordination', 'Alternative sourcing and supplier reallocation', 'Sourcing and supplier management', 'Supplier performance', 'Procurement decision support', 'Project-to-operations coordination', 'Prototype and first production readiness',
    'Engineering change follow-up', 'Business applications support', 'Workflow documentation', 'Requirements notes',
    'Testing observations', 'Clear user guidance', 'FAT and SAT principles', 'PLC programming and automated production systems', 'Electrotechnical and industrial systems', 'Internal and process audits', '5 Why and Ishikawa/Fishbone analysis', 'Scrap and rework analysis', 'Lean and Kaizen', 'Excel Power Query', 'Power BI and DAX', 'SQL fundamentals', 'Python (basic, self-taught)',
    'Customer operations and order-to-cash', 'SAP purchasing and goods receipt', 'FMCG materials planning and food-safety controlled operations', 'WMS stock accuracy and operational KPI follow-up', 'Category analysis and supplier segmentation', 'Total cost and supplier development', 'Procurement systems and process improvement', 'Restricted data handling and privacy awareness', 'AI-assisted research and documentation with human review',
  ],
  workExample: ['https://marziehnail-atelier.dk/en/'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <noscript><style>{'.reveal{opacity:1!important;transform:none!important}.mode-quick .deep-section{display:block!important}'}</style></noscript>
        {children}
      </body>
    </html>
  );
}
