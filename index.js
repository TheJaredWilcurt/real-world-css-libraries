import {
  readdirSync,
  readFileSync,
  statSync
} from 'node:fs';
import { join } from 'node:path';

const __dirname = import.meta.dirname;

const nameMap = {
  '30days30submits-18': '30 Days 30 Submits #18',
  '3dtransforms': '3D transforms',
  'admin-lte': 'AdminLTE',
  'amoled-cord': 'AMOLED-cord',
  beercss: 'Beer CSS',
  'blue-topaz-obsidian': 'Blue-Topaz Obsidian',
  cleanslate: 'CleanSlate',
  codyframe: 'CodeFrame',
  crookedstylesheets: 'CrookedStyleSheets',
  'cs16': 'cs16.css',
  'css3-buttons': 'CSS3 Buttons',
  'css-diner': 'CSS Diner',
  'css-extras': 'css-extras',
  'css-social-buttons': 'CSS Social Buttons',
  'css-spinners': 'CSS Spinners',
  cssco: 'CSSCO',
  cssicon: 'cssicon',
  cssplot: 'CSS Plot',
  'csszengarden-215': 'CSS Zen Garden #215',
  'elegantfin': 'ElegantFin',
  'ff-ultima': 'FF-Ultima',
  fluentbird: 'FluentBird',
  fomantic: 'Fomantic UI',
  'github-dark': 'GitHub-Dark',
  'github-markdown': 'GitHub-Markdown',
  'github-windows': 'GitHub-Windows',
  'gitweb-theme': 'gitweb-theme',
  'google-type': 'google-type',
  halfstyle: 'HalfStyle',
  'html-sheets-of-paper': 'HTML Sheets of Paper',
  instagram: 'Instagram.css',
  knacss: 'KNACSS',
  littlebox: 'littlebox',
  'material-for-bootstrap': 'Material for Bootstrap',
  'markdown-css': 'markdown-css',
  'medium.css': 'medium.css',
  'microsoft-metro-buttons': 'Microsoft Metro Buttons',
  minireset: 'Mini Reset',
  'modern-css-resets': 'Modern CSS Resets',
  mvp: 'MVP',
  nes: 'NES.css',
  'object-fit-polyfill': 'object-fit Polyfill',
  'obsidian-modular-css-layout': 'Obsidian Modular CSS Layout',
  'off-canvas-menu-effects': 'OffCanvasMenuEffects',
  patternbolt: 'PatternBolt',
  patternfly: 'PatternFly',
  proxmorph: 'ProxMorph',
  rippleui: 'Ripple UI',
  'sapc-apca': 'SAPC-APCA',
  semantic: 'Semantic UI',
  simptip: 'SimpTip',
  'social-signin-buttons': 'Social Sign-in Buttons',
  spcss: 'SPCSS',
  'stackoverflow-dark': 'StackOverflow-Dark',
  'swagger-ui-themes-2': 'Swagger UI Themes 2',
  'swagger-ui-themes-3': 'Swagger UI Themes 3',
  'the-50-front-end-project-44': 'The 50 Front-end Project #44',
  'the-new-css-reset': 'The New CSS Reset',
  'tw-animate-css': 'tw-animate-css',
  uikit: 'UIkit',
  'utility-opentype': 'Utility OpenType',
  universal: 'Universal.css',
  uswds: 'USWDS',
  'vim-css3-syntax': 'Vim CSS3 Syntax',
  vitepress: 'VitePress',
  'wikipedia-dark': 'Wikipedia Dark',
  'wtf-forms': 'WTF Forms',
  yacy: 'YaCy'
};
// Prefer identifiers listed here:
// https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository#searching-github-by-license-type
// spdx.org/licenses
const nameLicenseMap = {
  '960.gs': 'GPL-3.0 or MIT',
  animate: 'Hippocratic-2.1',
  bootplus: 'Apache-2.0 or GPL-2.0',
  carbon: 'Apache-2.0',
  'css-diner': 'MPL-2.0',
  'css-extras': 'CC0-1.0 or MIT',
  cssicon: 'CC0-1.0',
  'csszengarden-215': 'CC-BY-NC-SA-1.0',
  cutestrap1: 'MIT',
  cutestrap2: 'GPL-3.0',
  evil: 'Public Domain',
  'ff-ultima': 'MPL-2.0',
  'stackoverflow-dark': 'CC-BY-SA-4.0',
  'github-dark': 'BSD-2-Clause',
  holmes: 'GPL-3.0',
  knacss: 'WTFPL',
  meyer: 'Public Domain',
  'microsoft-metro-buttons': 'CC-BY-3.0',
  missing: 'BSD-2-Clause',
  'obsidian-modular-css-layout': 'GPL-3.0',
  'portfolio-template': 'GPL-3.0',
  pure: 'BSD-3-Clause',
  'pygments-fruity': 'Unlicense',
  remedy: 'MPL-2.0',
  'remedy-quotes': 'MPL-2.0',
  sanitize: 'CC0-1.0',
  'sapc-apca': 'AGPL-3.0',
  'shina-fox': 'MPL-2.0',
  sierra: 'GPL-2.0',
  'social-signin-buttons': 'Unlicense',
  'the-50-front-end-project-44': 'BSL-1.0',
  universal: 'WTFPL',
  uswds: 'CC0-1.0',
  'wikipedia-dark': 'CC-BY-SA-4.0',
  yacy: 'CC-BY-2.0',
  'zotero-dark-theme': 'GPL-3.0'
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
export const getVersion = function (file) {
  // 'ultimate-victory.css-v1.0.2.css' => ['ultimate', 'ictory', '1.0.2']
  const versionGroup = file
    .replaceAll('.css', '')
    .split('-v');

  // '1.0.2'
  const version = versionGroup[versionGroup.length - 1];

  return 'v' + version;
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
    .split('\n')
    .toSpliced(0, 1)
    .join('\n');
}
function getUrlFromSource (source) {
  const firstLine = source.split('\n')[0];
  return firstLine
    .replace('/* ', '')
    .replace(' */', '');
}
function validate (source) {
  const firstLine = source.split('\n')[0];
  return (
    firstLine.startsWith('/* ') &&
    firstLine.endsWith(' */') &&
    firstLine.length > 10
  );
}

export default function (includeUrl) {
  const libsPath = join(__dirname, 'libs');
  const fileNames = readdirSync(libsPath).sort();
  const libraries = [];
  for (const fileName of fileNames) {
    const filePath = join(libsPath, fileName);
    const sourceWithUrl = getSource(filePath);
    const library = {
      fileName,
      name: getFullName(fileName),
      version: getVersion(fileName),
      license: getLicences(fileName),
      source: getSourceWithoutURL(sourceWithUrl),
      size: statSync(filePath).size
    };
    if (includeUrl) {
      library.url = getUrlFromSource(sourceWithUrl);
      if (!validate(sourceWithUrl)) {
        console.log('\n\n\n\n\n');
        console.log('ERROR: Invalid URL on first line:\n\n  ' + fileName);
        console.log('\n\n\n\n\n');
        throw '';
      }
    }
    libraries.push(library);
  }
  return libraries;
};
