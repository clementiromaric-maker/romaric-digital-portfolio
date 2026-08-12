import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const outRoot = join(process.cwd(), 'out');
const daRoot = join(outRoot, 'da');

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await htmlFiles(full));
    else if (entry.isFile() && entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

let patched = 0;
for (const file of await htmlFiles(daRoot)) {
  const source = await readFile(file, 'utf8');
  const output = source.replace('<html lang="en">', '<html lang="da">');
  if (output !== source) {
    await writeFile(file, output, 'utf8');
    patched += 1;
  }
}
if (patched === 0) throw new Error('No Danish exported HTML files were patched. Check the static-export structure.');

const en = await readFile(join(outRoot, 'index.html'), 'utf8');
const da = await readFile(join(daRoot, 'index.html'), 'utf8');
const css = await readFile(join(process.cwd(), 'app', 'globals.css'), 'utf8');
const requiredMobileCss = [
  '.hero:after{display:none}',
  '.record-route{grid-template-columns:repeat(2,minmax(0,1fr))',
  '.record-grid{grid-template-columns:auto minmax(0,1fr)',
  '.case-index__inner{display:flex',
  'overflow-wrap:normal;word-break:normal',
  '.mobile-menu{display:none;position:relative}',
  '.system-map__proof{display:grid',
];
for (const marker of requiredMobileCss) {
  if (!css.includes(marker)) throw new Error(`Mobile CSS is missing required marker: ${marker}`);
}

const requiredEnglish = [
  'Technical Procurement · Supply Planning · ERP',
  'Romaric_Clementi_Professional_CV.pdf',
  'I connect purchasing decisions,',
  'material plans and ERP data',
  'to keep production ready.',
  'I spot supply risks early and make sure the right action is followed through before production is affected.',
  'Languages: French native · English fluent · Danish operational (PD2/B1+)',
  'Recruiter view',
  'Hiring-manager view',
  'I keep the whole flow visible.',
  'Careful isn’t a system.',
  'I do not start with the tool. I start with the problem.',
  'Turn recurring problems into reliable ways of working.',
  'Understand the problem before choosing the tool.',
  'What I handle today',
  'What I am ready to take on next',
  'Where I want to grow',
  'Documented experience.',
  'Two core cases and one supporting implementation.',
  'I look beyond the purchase order to delivery, cost, quality, data accuracy, documentation and production impact',
  'I managed broad technical purchasing across materials, customer-specific components, surface treatments, specialist subcontracting and external testing/inspection',
  'Across 30+ international suppliers, I ran RFQs, compared suppliers and quotations, negotiated, chose sourcing routes',
  'Current operating range',
  'Procurement & suppliers',
  '2,000+ ERP records and 200+ complex multi-level BOM/product structures',
  'Broader sourcing ownership is the next step.',
  'Broader sourcing ownership is the next step.',
  'Leadership in practice',
  'Technology in practice.',
  'Where I can grow next',
  'Once the operation is stable, use what I learn to create wider value.',
  'Earlier commercial operations experience',
  'International Customer & Order Operations',
  'What I am ready to take on next',
  'Next-step roles',
  'Owned assigned French and European customer files',
  'Restricted, personal, export-controlled or prototype data stays within approved systems and processes.',
  'Python (basic, self-taught)',
  'Ishikawa/Fishbone',
  'surface treatments',
  'external testing/inspection',
  'phase-in/phase-out',
  'Transaction-level SAP purchasing and goods receipt across 15-20 suppliers',
  'FMCG planning: 5 production lines / 40+ variants, within formal food-safety/HACCP/GMP-related routines',
  'Automated-production and electrotechnical foundation: Bac Pro PSPA, PLC programming and Bac STI Génie Électrotechnique',
  'Internal/process audits, 5 Why and Ishikawa/Fishbone root-cause analysis, scrap/rework improvement',
];
const requiredDanish = [
  'Teknisk indkøb · Planlægning · ERP',
  'Jeg forbinder indkøbsbeslutninger,',
  'materialeplaner og ERP-data',
  'så produktionen er klar.',
  'Jeg opdager forsyningsrisici tidligt og følger den rigtige handling til dørs, før produktionen bliver ramt.',
  'Sprog: Fransk, modersmål · Engelsk, flydende · Dansk på operationelt niveau (PD2/B1+)',
  'Rekruttereroverblik',
  'Faglig gennemgang',
  'Jeg holder hele flowet synligt.',
  'Omhu alene er ikke et system.',
  'Jeg starter ikke med værktøjet. Jeg starter med problemet.',
  'Gør tilbagevendende problemer til stabile arbejdsgange.',
  'Forstå problemet, før værktøjet vælges.',
  'Det jeg håndterer i dag',
  'Det jeg er klar til som næste skridt',
  'Det jeg vil udvikle mig imod',
  'Dokumenteret erfaring.',
  'To hovedcases og ét supplerende eksempel.',
  'Jeg ser ud over selve indkøbsordren til levering, omkostninger, kvalitet, datakvalitet, dokumentation og påvirkning på produktionen',
  'bredt teknisk indkøb af materialer, kundespecifikke komponenter, overfladebehandlinger, specialiseret underleverandørarbejde og ekstern test/inspektion',
  'På tværs af 30+ internationale leverandører gennemførte jeg RFQ-forløb, sammenlignede leverandører og tilbud, forhandlede',
  'Aktuelt ansvarsområde',
  'Indkøb & leverandører',
  '2.000+ ERP-registreringer og 200+ komplekse BOM-/produktstrukturer',
  'Bredere sourcingansvar er næste skridt.',
  'Bredere sourcingansvar er næste skridt.',
  'Ansvar og koordinering i praksis',
  'Teknologi i praksis.',
  'En klar vej videre',
  'Når driften er stabil, bruger jeg det, jeg har lært, til at skabe bredere værdi.',
  'Tidligere kommerciel driftserfaring',
  'International kunde- og ordredrift',
  'Det jeg er klar til som næste skridt',
  'Næste karrieretrin',
  'Havde ansvar for tildelte franske og europæiske kundeforløb',
  'Fortrolige, personhenførbare, eksportkontrollerede eller prototype-relaterede data bliver i godkendte systemer og processer.',
  'Python (grundlæggende, selvlært)',
  'Ishikawa/fiskebensanalyse',
  'overfladebehandlinger',
  'ekstern test/inspektion',
  'indfasning/udfasning',
  'Transaktionsbaseret SAP-indkøb og varemodtagelse på tværs af 15-20 leverandører',
  'FMCG-planlægning: 5 produktionslinjer / 40+ varianter under formelle fødevaresikkerheds- og HACCP/GMP-relaterede rutiner',
  'Fundament i automatiseret produktion og elektroteknik: Bac Pro PSPA, PLC-programmering og Bac STI Génie Électrotechnique',
  'Interne/procesaudits, 5 Why og Ishikawa/fiskebensanalyse, forbedring af kassation/omarbejde',
];
const forbidden = [
  'focused placement',
  'first four weeks',
  'four-week proposal',
  '4-week proposal',
  'paid support or another relevant route',
  'available 3 august',
  'available from 3 august',
  'python basics, self-taught',
  'procurement · erp · responsible ai',
  'indkøb · erp · ansvarlig ai',
  'evidence before adjectives',
  'Customer Master Data / Order-to-Cash',
  'Customer Operations / Order-to-Cash',
  'Broader scope next',
  'Selective next roles',
  "without changing the portfolio's primary industrial focus",
  'Kundedrift / ordre-til-betaling',
  'Kundestamdata / ordre-til-betaling',
  'Næste bredere ansvar',
  'Selektive næste roller',
  'uden at ændre portfolioens primære industrielle fokus',
  'Planning & Supplier Visibility Case',
  'Planlægning og leverandørsynlighed',
  'https://io.clementiromaric.workers.dev',
  'Romaric_Clementi_Technical_Procurement_Supplier_' + 'Projects_CV.pdf',
  'dokumentation før tillægsord',
  'evidence before claims.',
  'built for a fast recruiter scan',
  'one operating core across',
  'broader responsibility built on operational proof',
  'additional operating depth',
  'longer-term destination',
  'finance-related stakeholders',
  'routine structuring',
  'restricted-data boundaries',
  'dokumentation før påstande.',
  'operationelle virkelighed bag tallene',
  'praktisk governance',
  'langsigtet destination',
  'økonomirelaterede interessenter',
  'leverandør-recovery',
  'release-disciplin',
  'produktionsordreparathed',
  'control and adoption check',
  'dokumentationsnøgle',
  'godkendelsesgates',
  'overdragelsesrytme',
  'a focused progression path',
  'en fokuseret udviklingsvej',
  'i do not start with ai. i start with friction.',
  'from recurring problem to reliable routine',
  'proven responsibility',
  'leadership foundation',
  'trusted data comes first',
  'jeg starter ikke med ai. jeg starter med problemet.',
  'dokumenteret ansvar',
  'fundament for ledelse',
  'kongsberg',
  'bae systems',
  'weibel',
  'struers',
  'orbex',
];

const normalized = (value) => value
  .replaceAll('&amp;', '&')
  .replaceAll('&#38;', '&')
  .replaceAll('&quot;', '\"')
  .replaceAll('&#39;', "'")
  .replaceAll('&#x27;', "'")
  .replaceAll('&nbsp;', ' ')
  .toLocaleLowerCase('en-US')
  .replace(/\s+/g, ' ')
  .trim();
const enNormalized = normalized(en);
const daNormalized = normalized(da);

const canonicalDomain = 'romaric-operations-portfolio.clementiromaric.workers.dev';
if (!enNormalized.includes(canonicalDomain)) throw new Error(`English root is missing the production canonical domain: ${canonicalDomain}`);
if (!daNormalized.includes(canonicalDomain)) throw new Error(`Danish root is missing the production canonical domain: ${canonicalDomain}`);
if (enNormalized.includes('https://io.clementiromaric.workers.dev') || daNormalized.includes('https://io.clementiromaric.workers.dev')) throw new Error('Export still contains the retired https://io.clementiromaric.workers.dev domain.');

for (const marker of requiredEnglish) {
  if (!enNormalized.includes(normalized(marker))) throw new Error(`English root is missing required marker: ${marker}`);
}
for (const marker of requiredDanish) {
  if (!daNormalized.includes(normalized(marker))) throw new Error(`Danish route is missing required marker: ${marker}`);
}
for (const phrase of forbidden) {
  const needle = normalized(phrase);
  if (needle.length < 3) throw new Error(`Invalid forbidden stale-wording marker (too short): ${JSON.stringify(phrase)}`);
  if (enNormalized.includes(needle)) throw new Error(`English root contains forbidden stale wording: ${phrase}`);
  if (daNormalized.includes(needle)) throw new Error(`Danish route contains forbidden stale wording: ${phrase}`);
}

// Typography preferences belong to authored copy, not generated HTML.
// A previous guard incorrectly banned the en dash globally, which caused valid
// numeric ranges such as 15–20 to fail after an otherwise successful build.
const authoredCopy = await readFile(join(process.cwd(), 'app', 'content.js'), 'utf8');
if (authoredCopy.includes('—')) throw new Error('Authored portfolio copy contains an em dash. Use a comma, colon or hyphen instead.');

console.log(`Patched lang="da" into ${patched} Danish exported HTML file(s).`);
console.log('Verified V1.8.8.1 recruiter-scan/materials proof, current professional CV link, current EN/DA hero and Python wording, verified earlier-experience markers, production canonical/share metadata, mobile CSS and Cloudflare-safe source.');
