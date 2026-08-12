export const dynamic = 'force-static';
const siteUrl = 'https://romaric-operations-portfolio.clementiromaric.workers.dev';
export default function sitemap() {
  const routes = [
    ['/', 1], ['/da/', .9],
    ['/work/erp-master-data/', .86], ['/work/planning-visibility/', .84], ['/work/source-of-truth/', .84],
    ['/da/arbejde/erp-masterdata/', .8], ['/da/arbejde/planlaegning-synlighed/', .78], ['/da/arbejde/kildegrundlag/', .78],
  ];
  return routes.map(([route, priority]) => ({ url: `${siteUrl}${route}`, changeFrequency: 'monthly', priority }));
}
