export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://romaric-digital-portfolio.clementiromaric.workers.dev';

export default function sitemap() {
  return [
    { url: `${siteUrl}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/da/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/work/marzieh-nail-atelier/`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${siteUrl}/da/arbejde/marzieh-nail-atelier/`, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
