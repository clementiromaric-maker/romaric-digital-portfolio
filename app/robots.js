export const dynamic = 'force-static';
const siteUrl = 'https://romaric-operations-portfolio.clementiromaric.workers.dev';
export default function robots() { return { rules: { userAgent: '*', allow: '/' }, sitemap: `${siteUrl}/sitemap.xml`, host: siteUrl }; }
