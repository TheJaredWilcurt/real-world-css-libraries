import {
  readdirSync,
  readFileSync,
  statSync
} from 'node:fs';
import { join } from 'node:path';

const __dirname = import.meta.dirname;

const nameMap = {
  'admin-lte': 'AdminLTE',
  beercss: 'Beer CSS',
  'blue-topaz-obsidian': 'Blue-Topaz Obsidian',
  crookedstylesheets: 'CrookedStyleSheets',
  'cs16': 'cs16.css',
  'css3-buttons': 'CSS3 Buttons',
  'css-diner': 'CSS Diner',
  cssicon: 'cssicon',
  'csszengarden-215': 'CSS Zen Garden #215',
  'elegantfin': 'ElegantFin',
  fomantic: 'Fomantic UI',
  'github-dark': 'GitHub-Dark',
  'github-markdown': 'GitHub-Markdown',
  instagram: 'Instagram.css',
  'material-for-bootstrap': 'Material for Bootstrap',
  'markdown-css': 'markdown-css',
  minireset: 'Mini Reset',
  'modern-css-resets': 'Modern CSS Resets',
  mvp: 'MVP',
  nes: 'NES.css',
  'obsidian-modular-css-layout': 'Obsidian Modular CSS Layout',
  patternfly: 'PatternFly',
  semantic: 'Semantic UI',
  'the-new-css-reset': 'The New CSS Reset',
  uikit: 'UIkit',
  uswds: 'USWDS',
  vitepress: 'VitePress',
  'wtf-forms': 'WTF Forms'
};
// Prefer keywords listed here:
// https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository#searching-github-by-license-type
const nameLicenseMap = {
  '960.gs': 'GPL-3.0 or MIT',
  animate: 'Hippocratic-2.1',
  carbon: 'Apache-2.0',
  'css-diner': 'MPL-2.0',
  cssicon: 'CC0-1.0',
  'csszengarden-215': 'CC-BY-NC-SA-1.0',
  cutestrap1: 'MIT',
  cutestrap2: 'GPL-3.0',
  'github-dark': 'BSD 2 Clause',
  meyer: 'Public Domain',
  'obsidian-modular-css-layout': 'GPL-3.0',
  pure: 'BSD',
  remedy: 'MPL-2.0',
  'remedy-quotes': 'MPL-2.0',
  sanitize: 'CC0-1.0',
  uswds: 'CC0-1.0'
};

function getName (file) {
  return file.split('-v')[0];
}
function getFullName (file) {
  function titleCase (value) {
    return value
      .split('-')
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(' ');
  }
  const name = getName(file);
  return nameMap[name] || titleCase(name);
}
function getVersion (file) {
  return 'v' + file
    .replace('.css', '')
    .split('-v')[1];
}
function getLicences (file) {
  const name = getName(file);
  return nameLicenseMap[name] || 'MIT';
}
function getSource (filePath) {
  return String(readFileSync(filePath));
}
function getSourceWithoutURL (source) {
  return source
    .split('*/\n')
    .toSpliced(0, 1)
    .join('');
}
function getUrlFromSource (source) {
  return source
   .replace('/* ', '')
   .split(' */\n')[0];
}

export default function (includeUrl) {
  const libsPath = join(__dirname, 'libs');
  const fileNames = readdirSync(libsPath).sort();
  const libraries = [];
  for (const fileName of fileNames) {
    const filePath = join(libsPath, fileName);
    const sourceWithUrl = getSource(filePath);
    const library = {
      name: getFullName(fileName),
      version: getVersion(fileName),
      license: getLicences(fileName),
      source: getSourceWithoutURL(sourceWithUrl),
      size: statSync(filePath).size
    };
    if (includeUrl) {
      library.url = getUrlFromSource(sourceWithUrl);
    }
    libraries.push(library);
  }
  return libraries;
};
