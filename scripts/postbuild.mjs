import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const daRoot = join(process.cwd(), 'out', 'da');

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

if (patched === 0) {
  throw new Error('No Danish exported HTML files were patched. Check the static-export structure.');
}

console.log(`Patched lang="da" into ${patched} Danish exported HTML file(s).`);
