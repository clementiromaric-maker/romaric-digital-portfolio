import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const appDir = path.join(root, 'app');

// Clean generated build output first.
for (const rel of ['.next', 'out']) {
  const target = path.join(root, rel);
  if (fs.existsSync(target)) fs.rmSync(target, { recursive: true, force: true });
}

// V6.1 moved English routes out of the old /(en) route group.
// When GitHub files are uploaded over an existing repository, deleted source files
// can remain behind. Remove that known legacy tree in the ephemeral build workspace
// before Next.js resolves routes.
const retiredEnglishGroup = path.join(appDir, '(en)');
if (fs.existsSync(retiredEnglishGroup)) {
  fs.rmSync(retiredEnglishGroup, { recursive: true, force: true });
  console.log('Removed retired legacy route group: app/(en)');
}

const pagePattern = /^page\.(?:js|jsx|ts|tsx)$/;
const pages = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && pagePattern.test(entry.name)) pages.push(full);
  }
}

function publicRoute(file) {
  const relDir = path.relative(appDir, path.dirname(file));
  const parts = relDir === '' ? [] : relDir.split(path.sep);
  const visible = parts.filter((segment) => {
    if (segment.startsWith('@')) return false; // parallel-route slot
    if (segment.startsWith('(') && segment.endsWith(')')) return false; // route group
    return true;
  });
  return '/' + visible.join('/');
}

walk(appDir);
const routes = new Map();
for (const file of pages) {
  const route = publicRoute(file);
  const list = routes.get(route) ?? [];
  list.push(path.relative(root, file).split(path.sep).join('/'));
  routes.set(route, list);
}

const duplicates = [...routes.entries()].filter(([, files]) => files.length > 1);
if (duplicates.length) {
  const details = duplicates
    .map(([route, files]) => `  ${route}\n${files.map((f) => `    - ${f}`).join('\n')}`)
    .join('\n');
  throw new Error(`Duplicate Next.js page routes remain after legacy cleanup:\n${details}`);
}

console.log(`Prebuild route guard passed: ${pages.length} page files resolve to ${routes.size} unique routes.`);
for (const route of [...routes.keys()].sort()) console.log(`  ${route}`);
