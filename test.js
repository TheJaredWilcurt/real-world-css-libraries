import {
  readdirSync,
  readFileSync,
  writeFileSync
} from 'node:fs';
import { join } from 'node:path';

import getRealWorldCSS from './index.js';

const __dirname = import.meta.dirname;

function getSize (libraries) {
  let total = 0;
  libraries.forEach((library) => {
    total = total + library.size;
  });
  return {
    bytes: total.toLocaleString(),
    MB: Math.round((total / 1024 / 1024) * 100) / 100
  };
}

function printTableAndTotal (libraries) {
  const { bytes, MB } = getSize(libraries);
  const table = libraries
    .map((library) => {
      return {
        ...library,
        source: library.source.slice(0, 20),
        url: library.url.slice(0, 30).split('//')[1]
      };
    });

  console.table(table);
  console.log('TOTAL: ' + bytes + ' bytes or ' + MB + ' MB.');
  return libraries;
}

function updateReadme (libraries) {
  const { MB } = getSize(libraries);
  const readmePath = join(__dirname, 'README.md');
  const readme = String(readFileSync(readmePath));
  const header = '## Libraries included:'
  const output = [
    readme.split('\n' + header)[0],
    header,
    '',
    'There are **' + libraries.length + '** files totaling **' + MB + 'MB** of unminified CSS.',
    '',
    'Library | License',
    ':--     | :--'
  ];
  libraries
    .toSorted((a, b) => {
      a = (a.name + a.version).toLowerCase();
      b = (b.name + b.version).toLowerCase();
      return (a > b) ? 1 : (a < b) ? -1 : 0;
    })
    .forEach((library) => {
      output.push('[' + library.name + '](' + library.url + ') | ' + library.license);
    });
  output.push('');
  writeFileSync(readmePath, output.join('\n'));
}

function checkLibsFolder (libraries) {
  const files = readdirSync(join(__dirname, 'libs'));

  const nonCssFiles = files.filter((file) => {
    return !file.endsWith('.css');
  });
  if (nonCssFiles.length) {
    throw 'File missing extension' + nonCssFiles.join(', ');
  }

  const filesMissingDashV = files.filter((file) => {
    return !file.includes('-v');
  });
  if (filesMissingDashV.length) {
    throw 'File missing versions' + filesMissingDashV.join(', ');
  }

  const filesMissingVersion = files.filter((file) => {
    const version = file
      .replaceAll('.css', '')
      .split('-v')[1];
    const [major, minor, patch] = version.split('.');
    return !(
      version.split('.').length === 3 &&
      major.length === major.match(/\d+/)[0].length &&
      minor.length === minor.match(/\d+/)[0].length &&
      patch.length === patch.match(/\d+/)[0].length
    );
  });
  if (filesMissingVersion.length) {
    throw 'File missing versions' + filesMissingVersion.join(', ');
  }

  const librariesMissingName = libraries.filter((library) => {
    return !library.name;
  });
  if (librariesMissingName.length) {
    console.log(librariesMissingName);
    throw 'Libraries missing name';
  }

  const librariesMissingLicense = libraries
    .filter((library) => {
      return !library.license.trim();
    })
    .map((library) => {
      return library.name;
    });
  if (librariesMissingLicense.length) {
    throw 'Libraries missing license ' + librariesMissingLicense.join(', ');
  }

  const librariesMissingSource = libraries
    .filter((library) => {
      return !library.source.trim();
    })
    .map((library) => {
      return library.name;
    });
  if (librariesMissingSource.length) {
    throw 'Libraries missing license ' + librariesMissingSource.join(', ');
  }

  const librariesMissingSize = libraries
    .filter((library) => {
      return !library.size;
    })
    .map((library) => {
      return library.name;
    });
  if (librariesMissingSize.length) {
    throw 'Libraries missing license ' + librariesMissingSize.join(', ');
  }

  const librariesMissingUrl = libraries
    .filter((library) => {
      return !library.url.trim();
    })
    .map((library) => {
      return library.name;
    });
  if (librariesMissingUrl.length) {
    throw 'Libraries missing license ' + librariesMissingUrl.join(', ');
  }
}

const includeUrl = true;
const libraries = getRealWorldCSS(includeUrl);

checkLibsFolder(libraries);
printTableAndTotal(libraries);
updateReadme(libraries);
