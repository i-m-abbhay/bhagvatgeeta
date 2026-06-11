import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '..', 'js', 'data.js');
const purportsDir = path.join(__dirname, 'purports');

const PURHI = {};
const PUREN = {};

for (let ch = 1; ch <= 18; ch++) {
  const file = path.join(purportsDir, `ch${String(ch).padStart(2, '0')}.js`);
  if (!fs.existsSync(file)) {
    console.warn('Missing chapter file:', file);
    continue;
  }
  const mod = await import(pathToFileURL(file).href);
  Object.assign(PURHI, mod.PURHI);
  Object.assign(PUREN, mod.PUREN);
}

function pathToFileURL(p) {
  const resolved = path.resolve(p);
  return new URL(`file:///${resolved.replace(/\\/g, '/')}`);
}

let content = fs.readFileSync(dataPath, 'utf8');
let hiCount = 0;
let enCount = 0;

for (const [key, purHi] of Object.entries(PURHI)) {
  const escapedKey = key.replace('.', '\\.');
  const re = new RegExp(`("${escapedKey}":\\{[\\s\\S]*?  purHi:")([^"]*)(")`);
  if (!re.test(content)) {
    console.warn('Missing purHi verse:', key);
    continue;
  }
  content = content.replace(re, (_, before, _old, after) => {
    hiCount++;
    const safe = purHi.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return `${before}${safe}${after}`;
  });
}

for (const [key, purEn] of Object.entries(PUREN)) {
  const escapedKey = key.replace('.', '\\.');
  const re = new RegExp(`("${escapedKey}":\\{[\\s\\S]*?  purEn:")([^"]*)(")`);
  if (!re.test(content)) {
    console.warn('Missing purEn verse:', key);
    continue;
  }
  content = content.replace(re, (_, before, _old, after) => {
    enCount++;
    const safe = purEn.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return `${before}${safe}${after}`;
  });
}

fs.writeFileSync(dataPath, content, 'utf8');
console.log(`Updated ${hiCount} Hindi and ${enCount} English purports.`);
