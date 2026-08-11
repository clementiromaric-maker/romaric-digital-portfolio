import fs from 'node:fs';
import path from 'node:path';

const out = path.resolve('out');
const required = [
  ['index.html', ['Digital Production', 'Clear digital', 'I turn scattered briefs', 'Understand the work before shaping the screen.', 'What I worked on', 'First 30 days', 'AI-assisted production', 'EN', 'DA']],
  ['da/index.html', ['Digital produktion', 'Klar digital', 'Jeg gør spredte oplæg', 'Forstå arbejdet, før skærmen formes.', 'Det arbejdede jeg med', 'Første 30 dage', 'AI-assisteret produktion', 'EN', 'DA']],
  ['work/marzieh-nail-atelier/index.html', ['The key trade-off', 'Marzieh Nail Atelier']],
  ['da/work/marzieh-nail-atelier/index.html', ['Den vigtigste afvejning', 'Marzieh Nail Atelier']]
];
const forbidden = ['I find the real friction behind messy briefs', 'Friction first. Tools second.', 'Friction → Source → Owner → Review → Reuse', 'Friktionslinse', 'Friktion først. Værktøjer bagefter.', '5.0 / 16', 'Website & Digital Workflow Builder', 'hamdambridge-private-pilot'];
const normalize = v => v.replaceAll('&amp;','&').replaceAll('&#38;','&').replaceAll('&nbsp;',' ').replace(/\s+/g,' ').toLowerCase();
if (!fs.existsSync(out)) throw new Error('Static export directory out/ is missing.');
// Patch exported Danish documents to the correct root language after the single-root-layout static export.
for (const rel of ['da/index.html', 'da/work/marzieh-nail-atelier/index.html']) {
  const p = path.join(out, rel);
  if (fs.existsSync(p)) {
    const raw = fs.readFileSync(p, 'utf8');
    fs.writeFileSync(p, raw.replace('<html lang=\"en\">', '<html lang=\"da\">').replace('<html lang="en">', '<html lang="da">'), 'utf8');
  }
}

for (const asset of ['_headers', 'robots.txt', 'sitemap.xml', 'assets/marzieh-homepage.webp', 'assets/marzieh-mobile-live.jpg']) {
  if (!fs.existsSync(path.join(out, asset))) throw new Error(`Missing exported public asset: ${asset}`);
}
for (const [rel, markers] of required) {
  const p = path.join(out, rel);
  if (!fs.existsSync(p)) throw new Error(`Missing exported route: ${rel}`);
  const raw = fs.readFileSync(p, 'utf8');
  const text = normalize(raw);
  for (const marker of markers) if (!text.includes(normalize(marker))) throw new Error(`${rel} is missing required marker: ${marker}`);
  for (const old of forbidden) if (text.includes(normalize(old))) throw new Error(`${rel} still contains retired copy: ${old}`);
}
console.log('V6.2 postbuild QA passed: routes, language switch, restored depth, assets and retired-copy checks are clean.');
