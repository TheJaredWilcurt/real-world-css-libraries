import {
  readdirSync,
  readFileSync
} from 'node:fs';
import { join } from 'node:path';

const __dirname = import.meta.dirname;

function titleCase (value) {
  return value
    .split('-')
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');
}
function getName (file) {
  return file.split('-v')[0];
}
function getFullName (file) {
  const name = getName(file);
  const nameMap = {
    'admin-lte': 'AdminLTE'
  };
  return nameMap[name] || titleCase(name);
}
function getVersion (file) {
  return 'v' + file
    .replace('.css', '')
    .split('-v')[1];
}
function getLicences (file) {
  const name = getName(file);
  const nameLicenseMap = {
    '960.gs': 'MIT or GPL',
    animate: 'Hippocratic License v2.1',
    'github-dark': 'BSD 2 Clause',
    meyer: 'Public Domain',
    pure: 'BSD'
  };
  return nameLicenseMap[name] || 'MIT';
}

export default function () {
  const libs = join(__dirname, 'libs');
  const libraries = readdirSync(libs);
  const output = [];
  for (const library of libraries) {
    const source = String(readFileSync(join(libs, library)));
    output.push({
      library: getFullName(library),
      version: getVersion(library),
      license: getLicences(library),
      file: library,
      source,
      size: source.length
    });
  }
  return output;
};
