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
  title: 'Romaric Clementi | Website & Digital Workflow Builder',
  description:
    'Portfolio for web agencies, digital teams and startups. Romaric Clementi turns unclear human and business needs into useful first-version systems: websites, UX flows, content systems, QA notes and AI-assisted prototypes.',
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
    title: 'Romaric Clementi | Website & Digital Workflow Builder',
    description:
      'Live business website, UX structure, working first versions, workflow prototypes, mobile QA and AI-assisted digital production.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Romaric Clementi portfolio preview' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romaric Clementi | Website & Digital Workflow Builder',
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
  jobTitle: 'Website & Digital Systems Builder',
  knowsAbout: [
    'Website production',
    'UX implementation',
    'Digital workflow',
    'First-version systems',
    'Trust UX',
    'Service-system design',
    'Mobile QA',
    'Content structure',
    'Cloudflare Pages',
    'GitHub deployment',
    'AI-assisted prototyping',
  ],
  url: 'https://marziehnail-atelier.dk/en/',
  workExample: [
    'https://marziehnail-atelier.dk/en/',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts are installed through npm and served from the static build. No Google Fonts or external font requests. */}
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
          <style>{'.reveal{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
