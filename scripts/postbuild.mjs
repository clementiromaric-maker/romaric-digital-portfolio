import fs from 'node:fs';
import path from 'node:path';

const out = path.resolve('out');
const required = [
  ['index.html', ['Digital Production', 'Clear digital structure', 'I turn scattered briefs', 'Understand the work before shaping the screen.', 'What I worked on', 'AI-assisted production']],
  ['da/index.html', ['Digital produktion', 'Klar digital struktur', 'Jeg gør spredte oplæg', 'Forstå arbejdet, før skærmen formes.', 'Det arbejdede jeg med', 'AI-assisteret produktion']],
  ['work/marzieh-nail-atelier/index.html', ['The key trade-off', 'Marzieh Nail Atelier']],
  ['da/work/marzieh-nail-atelier/index.html', ['Den vigtigste afvejning', 'Marzieh Nail Atelier']]
];
const forbidden = ['I find the real friction behind messy briefs', 'Friction first. Tools second.', 'Friction → Source → Owner → Review → Reuse', 'Friktionslinse', 'Friktion først. Værktøjer bagefter.', '5.0 / 16', 'Website & Digital Workflow Builder', 'First 30 days', 'hamdambridge-private-pilot'];
const normalize = v => v.replaceAll('&amp;','&').replaceAll('&#38;','&').replaceAll('&nbsp;',' ').replace(/\s+/g,' ').toLowerCase();
if (!fs.existsSync(out)) throw new Error('Static export directory out/ is missing.');
for (const asset of ['_headers', 'robots.txt', 'sitemap.xml', 'assets/marzieh-homepage.webp']) {
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
console.log('V6 postbuild QA passed: routes, language markers and retired-copy checks are clean.');
