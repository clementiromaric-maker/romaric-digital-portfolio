import { rm } from 'node:fs/promises';
for (const path of ['.next', 'out']) {
  await rm(path, { recursive: true, force: true });
}
console.log('Removed stale .next and out directories before build.');
