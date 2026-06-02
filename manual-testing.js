import {
  readFileSync,
  writeFileSync
} from 'node:fs';
import { join } from 'node:path';

import getRealWorldCSS from './index.js';

const __dirname = import.meta.dirname;

function printTableAndTotal () {
  let total = 0;
  const includeUrl = true;

  const libraries = getRealWorldCSS(includeUrl);
  const table = libraries
    .map((library) => {
      total = total + library.size;
      return {
        ...library,
        source: library.source.slice(0, 20),
        url: library.url.slice(0, 30).split('//')[1]
      };
    });

  console.table(table);
  const bytes = total.toLocaleString();
  const MB = Math.round((total / 1024 / 1024) * 100) / 100;
  console.log('TOTAL: ' + bytes + ' bytes or ' + MB + ' MB.');
  return libraries;
}

function updateReadme (libraries) {
  const readmePath = join(__dirname, 'README.md');
  const readme = String(readFileSync(readmePath));
  const header = '## Libraries included:'
  const output = [
    readme.split('\n' + header)[0],
    header,
    '',
    'Library | License',
    ':--     | :--'
  ];
  libraries.forEach((library) => {
    output.push('[' + library.name + '](' + library.url + ') | ' + library.license);
  });
  output.push('');
  writeFileSync(readmePath, output.join('\n'));
}

const libraries = printTableAndTotal();
updateReadme(libraries);
