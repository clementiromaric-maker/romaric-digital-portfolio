import { access, readdir, readFile, writeFile } from 'node:fs/promises';
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

const allHtml = (await htmlFiles(outRoot));
const combined = (await Promise.all(allHtml.map((file) => readFile(file, 'utf8')))).join('\n');
const required = [
  'Digital Production',
  'Quick scan',
  'Deep dive',
  'Clementi AI Workflow',
  'FørsteMatch',
  'Marzieh Nail Atelier',
  'romaric-portrait.webp',
  'marzieh-desktop-proof-4p9-37-v687.webp',
  'marzieh-service-path-proof-v687.webp',
  'marzieh-composition-full-v687.webp',
  'marzieh-guide-proof-v687.webp',
  'Walkthrough available on request',
  'Gennemgang efter aftale',
  'GitHub + Cloudflare',
  'A practical starting point',
  'Et praktisk udgangspunkt',
  '+45 28 73 74 85',
  'Email Romaric',
  'Operations portfolio',
  'Clear structure. Practical delivery. Work that is easier to use and easier to continue.',
  'Choose the right service path first',
  'Greater Copenhagen and the Øresund region',
  'quality/process work trained me to follow dependencies',
  'Storkøbenhavn og Øresundsregionen',
];
for (const marker of required) {
  if (!combined.includes(marker)) throw new Error(`Required portfolio marker missing after build: ${marker}`);
}
const forbidden = [
  'I find the real friction behind messy briefs',
  'Hidden friction lens',
  'Friction first. Tools second.',
  'Jeg finder den reelle friktion bag uklare briefs',
  'Friktionslinse',
  'Friktion først. Værktøjer bagefter.',
  'hamdambridge-private-pilot.clementiromaric.workers.dev',
  'Open preview',
  'Open pilot',
  'Åbn preview',
  'Åbn pilot',
  'Public preview',
  'Public pilot',
  'Offentlig preview',
  'Offentlig pilot',
  'featured-case__workflow',
  'short <b>praktik</b>',
  'kort <b>praktik</b>',
  '—',
];
for (const marker of forbidden) {
  if (combined.includes(marker)) throw new Error(`Retired/private copy leaked into exported HTML: ${marker}`);
}
for (const route of ['index.html','da/index.html','work/marzieh-nail-atelier/index.html','da/arbejde/marzieh-nail-atelier/index.html']) {
  await access(join(outRoot, route));
}
for (const asset of ['assets/cursor-default.svg','assets/cursor-action.svg','assets/marzieh-desktop-proof-4p9-37-v687.webp','assets/marzieh-service-path-proof-v687.webp','assets/marzieh-composition-full-v687.webp','assets/marzieh-guide-proof-v687.webp']) {
  await access(join(outRoot, asset));
}
console.log(`Patched lang="da" into ${patched} Danish exported HTML file(s). Portfolio regression checks passed.`);
