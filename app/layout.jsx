import '@fontsource-variable/fraunces';
import '@fontsource-variable/fraunces/wght-italic.css';
import '@fontsource-variable/hanken-grotesk';
import '@fontsource-variable/hanken-grotesk/wght-italic.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import '@fontsource/ibm-plex-mono/600.css';
import '@fontsource/ibm-plex-mono/700.css';
import './globals.css';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://romaric-digital-portfolio.clementiromaric.workers.dev'),
  title: 'Romaric Clementi | Digital Production · Content Systems · Web & QA',
  description:
    'Digital-production portfolio for web agencies and teams: content systems, brand implementation, website delivery, CMS workflows, local-search foundations, responsive QA and multilingual delivery.',
  authors: [{ name: 'Romaric Clementi' }],
  creator: 'Romaric Clementi',
  publisher: 'Romaric Clementi',
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      da: '/da/',
    },
  },
  openGraph: {
    title: 'Romaric Clementi | Digital Production · Content Systems · Web & QA',
    description:
      'Research-to-release digital work: brand implementation, structured content, websites, local-search foundations, CMS workflows, responsive QA and practical handover.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Romaric Clementi portfolio preview' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romaric Clementi | Digital Production · Content Systems · Web & QA',
    description: 'Clear digital structure from unclear needs.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#F4EFE5',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Romaric Clementi',
  email: 'mailto:clementiromaric@protonmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Greater Copenhagen / Tune',
    addressCountry: 'DK',
  },
  jobTitle: 'Digital Production / Content Systems / Web / QA',
  knowsAbout: [
    'Website production',
    'Content systems',
    'Brand implementation',
    'Local search foundations',
    'Google Search Console',
    'Google Business Profile',
    'UX implementation',
    'Digital workflow',
    'First-version systems',
    'Trust UX',
    'Service-system design',
    'Mobile QA',
    'Content structure',
    'Structured content',
    'Reusable sections',
    'Sanity CMS',
    'Jira issue tracking',
    'Cloudflare Pages',
    'GitHub deployment',
    'AI-assisted prototyping',
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://romaric-digital-portfolio.clementiromaric.workers.dev',
  mainEntityOfPage: process.env.NEXT_PUBLIC_SITE_URL || 'https://romaric-digital-portfolio.clementiromaric.workers.dev',
  workExample: [
    'https://marziehnail-atelier.dk/en/',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts are installed through npm and bundled locally into the static build. No Google Fonts or external font requests. */}
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}.portfolio-view.is-quick .deep-dive-section{display:block!important}.portfolio-view .sec-no::before{content:attr(data-deep)!important}'}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
