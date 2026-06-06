import './globals.css';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://romaric-clementi-portfolio.pages.dev'),
  title: 'Romaric Clementi — Website & Digital Workflow Builder',
  description:
    'Portfolio for web agencies, digital teams and startups. Romaric Clementi turns unclear business needs into clear digital structures: websites, UX flows, content systems, QA notes and AI-assisted prototypes.',
  authors: [{ name: 'Romaric Clementi' }],
  creator: 'Romaric Clementi',
  publisher: 'Romaric Clementi',
  openGraph: {
    title: 'Romaric Clementi — Website & Digital Workflow Builder',
    description:
      'Live business website, workflow prototypes, UX structure, content systems, mobile QA and AI-assisted digital production.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Romaric Clementi portfolio preview' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romaric Clementi — Website & Digital Workflow Builder',
    description: 'Clear digital structure from unclear business needs.',
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
  jobTitle: 'Website & Digital Workflow Builder',
  knowsAbout: [
    'Website production',
    'UX implementation',
    'Digital workflow',
    'Mobile QA',
    'Content structure',
    'Cloudflare Pages',
    'GitHub deployment',
    'AI-assisted prototyping',
  ],
  url: 'https://marziehnail-atelier.dk/en/',
  workExample: [
    'https://marziehnail-atelier.dk/en/',
    'https://clementi-ai-workflow-pages-preview.pages.dev/',
    'https://foerstematch-pilot.pages.dev/',
    'https://hamdambridge-private-pilot.clementiromaric.workers.dev/',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Runtime font loading only. This avoids next/font build failures in offline CI. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,900;1,9..144,400;1,9..144,500&family=Hanken+Grotesk:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
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
