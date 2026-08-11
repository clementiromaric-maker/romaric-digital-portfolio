import fs from 'node:fs';
for (const dir of ['.next','out']) { if (fs.existsSync(dir)) fs.rmSync(dir,{recursive:true,force:true}); }
console.log('Cleaned .next and out');
