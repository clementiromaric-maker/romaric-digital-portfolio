import { readdir, rm, stat } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const root = process.cwd();
for (const dir of ['.next', 'out']) {
  await rm(join(root, dir), { recursive: true, force: true });
}

// Older portfolio versions used app/(en). Remove it in the build workspace if a stale
// GitHub folder survives a file-over-file upload. The canonical English routes are app/*.
const retiredEnglishGroup = join(root, 'app', '(en)');
await rm(retiredEnglishGroup, { recursive: true, force: true });

async function walk(dir) {
  const rows = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) rows.push(...await walk(full));
    else if (/^page\.(jsx?|tsx?)$/.test(entry.name)) rows.push(full);
  }
  return rows;
}

function routeFor(file) {
  const parts = relative(join(root, 'app'), file).split(sep).slice(0, -1);
  const visible = parts.filter((part) => !/^\(.*\)$/.test(part));
  return '/' + visible.join('/');
}

const pages = await walk(join(root, 'app'));
const seen = new Map();
for (const file of pages) {
  const route = routeFor(file).replace(/\/$/, '') || '/';
  if (seen.has(route)) {
    throw new Error(`Duplicate public route ${route}: ${relative(root, seen.get(route))} and ${relative(root, file)}`);
  }
  seen.set(route, file);
}
console.log(`Prebuild route guard passed: ${pages.length} page files resolve to ${seen.size} unique routes.`);
for (const route of [...seen.keys()].sort()) console.log(`  ${route}`);
