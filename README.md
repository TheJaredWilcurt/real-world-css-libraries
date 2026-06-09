# real-world-css-libraries

Corpus of unminified, real-world, CSS files from open source projects.

For use in minification tests and tooling benchmarks.

To see how various CSS Minification Tools perform when minifying these files:

* https://www.keithcirkel.co.uk/css-minify-tests/#real-world


## Usage

`npm i -D real-world-css-libraries`

```js
// Import the synchronous function
import getRealWorldCSS from 'real-world-css-libraries';

let libraries = [];
try {
  libraries = getRealWorldCSS();
} catch (error) {
  console.log('Failed to read the CSS files.');
  console.log(error);
}

console.log(libraries);
/*
 * [
 *   {
 *     fileName: '960.gs-v0.0.0.css',
 *     name: '960.gs',
 *     version: 'v1.0.0',
 *     license: 'GPL-3.0 or MIT',
 *     source: '/*\n  960 Grid System ~ Core CSS.\n  Learn more ~ http://9...',
 *     size: 9989,
 *     url: 'https://github.com/nathansmith/960-Grid-System/blob/master/code/css/960.css'
 *   },
 *   {
 *     fileName: 'animate-v4.1.1.css',
 *     name: 'Animate',
 *     version: 'v4.1.1',
 *     license: 'Hippocratic-2.1',
 *     source: '@charset "UTF-8";\n/*!\n * animate.css - https://animate.s...',
 *     size: 95377,
 *     url: 'https://github.com/animate-css/animate.css/blob/main/animate.css'
 *   },
 *   ...
 * ]
 */

// Example: If you only wanted the names of libraries that use MIT License:
const namesOfLibrariesCompatibleWithMITLicense = libraries
  .filter((library) => {
    return library.license.includes('MIT');
  })
  .map((library) => {
    return library.name;
  });
console.log(namesOfLibrariesCompatibleWithMITLicense);
// ['960.gs', '98', 'AdminLTE', ...]
```


## Non-npm usage

If you are using a different programming language/package management system and can't `npm i` this library, you have some other options:

1. Download via `git`
   * `git clone https://github.com/TheJaredWilcurt/real-world-css-libraries.git`
   * `git clone git@github.com:TheJaredWilcurt/real-world-css-libraries.git`
1. HTTPS download via UNPKG:
   * https://app.unpkg.com/real-world-css-libraries
1. Manually download repo as a ZIP file:
   * https://github.com/TheJaredWilcurt/real-world-css-libraries/archive/refs/heads/main.zip


## Adding a library

1. Ensure it is part of a public repo that has an open source license
1. Create a file in the `libs` folder with the name lowercased and hyphenated, then a `-v` followed by the version number (if the source is not versioned, use `0.0.0`), then `.css`
1. The first line of the file must follow this pattern for automation to work:
   * `[Slash][Asterisk][Space][URL_TO_SOURCE][Space][Asterisk][Slash][New line]`
   * **Example:**
      * `/* https://github.com/user/repo/tree/main/file.css */`
1. The last line of the CSS file must be a `/n` (new line character).
1. If the source does not use MIT license, update the `nameLicenseMap` in `index.js`.
1. Run `npm t`, this will preview the output and update the list of libraries in the `README.md`
   * If the new library's name needs correcting (like `Mycssrepo` should be `My CSS Repo`), update `nameMap` in `index.js` and run `npm t` again.


## Skipped Libraries

These libraries were explicitly not included because they lack a compatible license. Issues have been created for them to add a license, if they do in the future, they can be included in this repo.

* https://github.com/cyanharlow/purecss-francine/issues/63
* https://github.com/datguypiko/Firefox-Mod-Blur/issues/238
* https://github.com/pattle/simpsons-in-css/issues/3
* https://github.com/soulwire/Makisu/pull/23
* https://github.com/jackyzha0/sunlit/issues/4


## Libraries included:

There are **151** files totaling **33.32MB** of unminified CSS.

Library | License
:--     | :--
[3D transforms](https://github.com/desandro/3dtransforms/blob/gh-pages/css/style.css) | MIT
[960.gs](https://github.com/nathansmith/960-Grid-System/blob/master/code/css/960.css) | GPL-3.0 or MIT
[98](https://github.com/jdan/98.css/blob/main/style.css) | MIT
[Academicons](https://github.com/jpswalsh/academicons/blob/v1.9.6/css/academicons.css) | MIT
[AdminLTE](https://github.com/ColorlibHQ/AdminLTE/blob/master/dist/css/adminlte.css) | MIT
[Animate](https://github.com/animate-css/animate.css/blob/main/animate.css) | Hippocratic-2.1
[Animo](https://github.com/ThrivingKings/animo.js/blob/master/animate-animo.css) | MIT
[Animsition](https://github.com/blivesta/animsition/blob/master/dist/css/animsition.css) | MIT
[Awesome Bootstrap Checkbox](https://github.com/flatlogic/awesome-bootstrap-checkbox/blob/master/awesome-bootstrap-checkbox.css) | MIT
[Balloon](https://github.com/kazzkiq/balloon.css/blob/master/balloon.css) | MIT
[Basscss](https://app.unpkg.com/basscss@8.1.0/files/css/basscss-important.css) | MIT
[Beer CSS](https://unpkg.com/beercss@4.0.21/dist/cdn/beer.css) | MIT
[Blue-Topaz Obsidian](https://raw.githubusercontent.com/PKM-er/Blue-Topaz_Obsidian-css/refs/heads/master/obsidian.css) | MIT
[Boilerform](https://github.com/Andy-set-studio/boilerform/blob/master/dist/css/boilerform.css) | MIT
[Bojler](https://unpkg.com/@slicejack/bojler@3.2.1/dist/inline.css) | MIT
[Bootstrap 4](https://github.com/twbs/bootstrap/releases/tag/v4.6.2) | MIT
[Bootstrap 5](https://github.com/twbs/bootstrap/releases/tag/v5.3.8) | MIT
[Bttn](https://github.com/ganapativs/bttn.css/blob/master/dist/bttn.css) | MIT
[Bulma](https://github.com/jgthms/bulma/blob/main/css/bulma.css) | MIT
[Carbon](https://unpkg.com/@carbon/styles@1.107.0/css/styles.css) | Apache-2.0
[Cardinal](https://github.com/cardinalcss/cardinalcss/blob/master/cardinal.css) | MIT
[Chota](https://github.com/jenil/chota/blob/main/dist/chota.css) | MIT
[Cirrus](https://github.com/Spiderpig86/Cirrus/blob/master/dist/cirrus.css) | MIT
[Classless](https://github.com/DigitallyTailored/Classless.css/blob/main/classless.css) | MIT
[CodeFrame](https://github.com/codyhouse/codyframe/blob/main/main/css/style.css) | MIT
[Concise](https://unpkg.com/concise.css@4.1.2/dist/concise.css) | MIT
[CrookedStyleSheets](https://github.com/jbtronics/CrookedStyleSheets/blob/master/screen.css) | MIT
[cs16.css](https://github.com/ekmas/cs16.css/blob/main/css/cs16.css) | MIT
[CSS Diner](https://github.com/flukeout/css-diner/blob/develop/css/style.css) | MPL-2.0
[CSS Plot](https://github.com/asciimoo/cssplot/blob/master/build/cssplot.full.css) | MIT
[CSS Social Buttons](https://github.com/smcllns/css-social-buttons/blob/master/css/zocial.css) | MIT
[CSS Spinners](https://github.com/jlong/css-spinners/blob/master/css/spinners.css) | MIT
[CSS Zen Garden #215](https://github.com/mezzoblue/csszengarden.com/blob/master/215/215.css) | CC-BY-NC-SA-1.0
[css-extras](https://github.com/sindresorhus/css-extras/blob/main/index.css) | CC0-1.0 or MIT
[CSS3 Buttons](https://github.com/ubuwaits/css3-buttons/blob/gh-pages/stylesheets/buttons.css) | MIT
[CSSCO](https://github.com/laurenwaller/cssco/blob/master/cssco.css) | MIT
[cssicon](https://github.com/wentin/cssicon/tree/master/css) | CC0-1.0
[Cutestrap1](https://github.com/tylerchilds/cutestrap/blob/v1.3.1/dist/css/cutestrap.css) | MIT
[Cutestrap2](https://github.com/tylerchilds/cutestrap/blob/master/dist/css/cutestrap.css) | GPL-3.0
[Destyle](https://github.com/nicolas-cusan/destyle.css/blob/master/destyle.css) | MIT
[Devices](https://unpkg.com/devices.css@0.2.0/dist/devices.css) | MIT
[Doxygen Awesome](https://github.com/jothepro/doxygen-awesome-css/blob/main/doxygen-awesome.css) | MIT
[Effeckt](https://github.com/h5bp/Effeckt.css/blob/master/css/effeckt.css) | MIT
[ElegantFin](https://github.com/lscambo13/ElegantFin/blob/main/Theme/ElegantFin-theme-v25.12.31.css) | MIT
[Evil](https://github.com/tlrobinson/evil.css/blob/master/evil.css) | Public Domain
[FF-Ultima](https://github.com/soulhotel/FF-ULTIMA/blob/main/theme/ffu-internal-appearance.css) | MPL-2.0
[Flakes](https://github.com/kumailht/flakes/blob/master/css/all.css) | MIT
[Flex Layout Attribute](https://github.com/StefanKovac/flex-layout-attribute/blob/master/css/flex-layout-attribute.css) | MIT
[Fomantic UI](https://github.com/fomantic/Fomantic-UI/blob/develop/dist/semantic.css) | MIT
[Font Awesome](https://github.com/FortAwesome/Font-Awesome/releases/tag/7.2.0) | MIT
[Foundation](https://github.com/foundation/foundation-sites/releases/tag/v6.9.0) | MIT
[Furatto](https://github.com/IcaliaLabs/furatto/blob/master/dist/css/furatto.css) | MIT
[Gallery](https://github.com/benschwarz/gallery-css/blob/master/dist/gallery.prefixed.css) | MIT
[GitHub-Dark](https://github.com/StylishThemes/GitHub-Dark/blob/master/github-dark.user.css) | BSD-2-Clause
[GitHub-Markdown](https://github.com/sindresorhus/github-markdown-css/blob/main/github-markdown.css) | MIT
[GitHub-Windows](https://github.com/Athari/CssGitHubWindows/blob/master/GitHubWindows.user.css) | MIT
[google-type](https://github.com/femmebot/google-type/blob/master/css/google-type.css) | MIT
[Gridlex](https://github.com/devlint/gridlex/blob/master/dist/gridlex.css) | MIT
[Gumby](https://github.com/GumbyFramework/Gumby/blob/master/css/gumby.css) | MIT
[Gutenberg](https://github.com/BafS/Gutenberg/blob/master/dist/gutenberg.css) | MIT
[Halfmoon](https://github.com/halfmoonui/halfmoon/blob/master/css/halfmoon.css) | MIT
[HalfStyle](https://github.com/arbelh/HalfStyle/blob/master/css/halfstyle.css) | MIT
[Hint](https://github.com/chinchang/hint.css/blob/master/hint.css) | MIT
[HTML Sheets of Paper](https://github.com/delight-im/HTML-Sheets-of-Paper/blob/gh-pages/css/sheets-of-paper.css) | MIT
[Hugo Universal Theme](https://github.com/devcows/hugo-universal-theme/blob/master/static/css/style.default.css) | MIT
[Icon Hover Effects](https://github.com/codrops/IconHoverEffects/blob/master/css/component.css) | MIT
[Instagram.css](https://github.com/picturepan2/instagram.css/blob/master/dist/instagram.css) | MIT
[Jupyter Themes](https://github.com/dunovank/jupyter-themes/blob/master/jupyterthemes/styles/compiled/gruvboxd.css) | MIT
[Load Awesome](https://labs.danielcardoso.net/load-awesome/assets/loaders.css) | MIT
[Loaders](https://github.com/ConnorAtherton/loaders.css/blob/master/loaders.css) | MIT
[Luxbar](https://github.com/balzss/luxbar/blob/master/build/luxbar.css) | MIT
[markdown-css](https://github.com/mrcoles/markdown-css/blob/master/markdown.css) | MIT
[Material for Bootstrap](https://github.com/Daemonite/material/blob/master/css/material.css) | MIT
[Meyer](https://meyerweb.com/eric/tools/css/reset/reset.css) | Public Domain
[Microsoft Metro Buttons](https://github.com/ace-subido/css3-microsoft-metro-buttons#license) | CC-BY-3.0
[Microtip](https://github.com/ghosh/microtip/blob/master/microtip.css) | MIT
[Mini Reset](https://unpkg.com/minireset.css@0.0.7/minireset.css) | MIT
[Mini](https://github.com/Chalarangelo/mini.css/blob/master/dist/mini-dark.css) | MIT
[Missing](https://unpkg.com/missing.css@1.3.0/dist/missing.css) | BSD-2-Clause
[Mobi](https://github.com/mobi-css/mobi.css/blob/master/packages/mobi.css/dist/mobi.css) | MIT
[Mocka](https://github.com/Chalarangelo/mocka/blob/master/dist/mocka.css) | MIT
[Modern CSS Resets](https://github.com/Andy-set-studio/modern-css-reset/blob/master/dist/reset.css) | MIT
[MVP](https://github.com/andybrewer/mvp/blob/master/mvp.css) | MIT
[Natural Selection](https://github.com/frontaid/natural-selection/blob/main/boilerplate.css) | MIT
[NES.css](https://unpkg.com/nes.css@2.3.0/css/nes.css) | MIT
[Normalize](https://github.com/necolas/normalize.css/blob/master/normalize.css) | MIT
[object-fit Polyfill](https://github.com/anselmh/object-fit/blob/master/dist/polyfill.object-fit.css) | MIT
[Obsidian Colored Sidebar](https://github.com/CyanVoxel/Obsidian-Colored-Sidebar/blob/main/Colored%20Sidebar%20Items.css) | MIT
[Obsidian Modular CSS Layout](https://github.com/efemkay/obsidian-modular-css-layout/blob/main/MCL%20Multi%20Column.css) | GPL-3.0
[Orbit](https://unpkg.com/@zumer/orbit@1.4.11/dist/orbit.css) | MIT
[Paper](https://github.com/cognitom/paper-css/blob/master/paper.css) | MIT
[PatternFly](https://unpkg.com/@patternfly/patternfly@6.5.2/patternfly.css) | MIT
[Pesticide](https://github.com/mrmrs/pesticide/blob/main/css/pesticide.css) | MIT
[Photon](https://github.com/connors/photon/blob/master/dist/css/photon.css) | MIT
[Picnic](https://cdn.jsdelivr.net/npm/picnic@7.1.0/picnic.css) | MIT
[Pico](https://github.com/picocss/pico/blob/main/css/pico.conditional.css) | MIT
[Pills](https://github.com/rohitkrai03/pills/blob/gh-pages/dist/pills.css) | MIT
[Portfolio Template](https://github.com/nisarhassan12/portfolio-template/blob/master/index.css) | GPL-3.0
[Preboot](https://github.com/mdo/preboot/blob/gh-pages/css/docs-compiled.css) | MIT
[Pretty Checkbox](https://github.com/lokesh-coder/pretty-checkbox/blob/master/dist/pretty-checkbox.css) | MIT
[Pure](https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure.css) | BSD-3-Clause
[Pygments Fruity](https://github.com/richleland/pygments-css/blob/master/fruity.css) | Unlicense
[Ratchet](https://github.com/twbs/ratchet/blob/master/dist/css/ratchet.css) | MIT
[Remedy Quotes](https://github.com/jensimmons/cssremedy/blob/master/css/quotes.css) | MPL-2.0
[Remedy](https://github.com/jensimmons/cssremedy/blob/master/css/remedy.css) | MPL-2.0
[Repaintless](https://github.com/szynszyliszys/repaintless/blob/master/repaintless-css/repaintless.css) | MIT
[Reset](https://github.com/Anurella/reset-css/blob/main/reset.css) | MIT
[Responsive](https://github.com/ResponsiveBP/Responsive/blob/v5-dev/dist/v4/responsive.css) | MIT
[Responsive](https://github.com/ResponsiveBP/Responsive/blob/v5-dev/dist/responsive.css) | MIT
[Ress](https://github.com/filipelinhares/ress/blob/master/ress.css) | MIT
[Ripple UI](https://unpkg.com/rippleui@1.12.1/dist/css/styles.css) | MIT
[Sakura](https://github.com/oxalorg/sakura/blob/master/css/sakura.css) | MIT
[Sanitize](https://github.com/csstools/sanitize.css/blob/main/sanitize.css) | CC0-1.0
[Select](https://github.com/filamentgroup/select-css/blob/master/src/select-css.css) | MIT
[Semantic UI](https://github.com/Semantic-Org/Semantic-UI/blob/master/dist/semantic.css) | MIT
[Shards](https://github.com/DesignRevision/shards-ui/blob/master/dist/css/shards.css) | MIT
[Sierra](https://unpkg.com/sierra-library@3.5.0/dist/sierra.css) | GPL-2.0
[Simple Grid](https://github.com/zachacole/Simple-Grid/blob/master/simple-grid.css) | MIT
[Simple Line Icons](https://github.com/thesabbir/simple-line-icons/blob/master/dist/styles/simple-line-icons.css) | MIT
[Simple](https://codeberg.org/kevquirk/simple.css/src/branch/main/simple.css) | MIT
[Skeleton](https://github.com/dhg/Skeleton/blob/master/css/skeleton.css) | MIT
[SPCSS](https://github.com/susam/spcss/blob/main/sp.css) | MIT
[Spectre](https://github.com/picturepan2/spectre/blob/master/dist/spectre.css) | MIT
[Spicetify Dribbblish](https://github.com/spicetify/spicetify-themes/blob/master/Dribbblish/user.css) | MIT
[Spicetify Text](https://github.com/spicetify/spicetify-themes/blob/master/text/user.css) | MIT
[Spinkit](https://github.com/tobiasahlin/SpinKit/blob/master/spinkit.css) | MIT
[Stackicons](https://github.com/parkerbennett/stackicons/blob/master/css/stackicons-social.css) | MIT
[Stacks](https://unpkg.com/@stackoverflow/stacks@2.8.6/dist/css/stacks.css) | MIT
[System](https://github.com/sakofchit/system.css/blob/main/style.css) | MIT
[Tablecloth](https://github.com/bwsewell/tablecloth/blob/master/assets/css/tablecloth.css) | MIT
[Tachyons](https://github.com/tachyons-css/tachyons/blob/main/css/tachyons.css) | MIT
[Tailwind](https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.css) | MIT
[The New CSS Reset](https://github.com/elad2412/the-new-css-reset/blob/main/css/reset.css) | MIT
[Toast](https://github.com/daneden/Toast/blob/master/css/grid.css) | MIT
[Tooltip Twispy](https://github.com/HubSpot/tooltip/blob/master/dist/css/tooltip-theme-twipsy.css) | MIT
[Tufte](https://unpkg.com/tufte-css@1.8.0/tufte.css) | MIT
[Tui](https://github.com/vinibiavatti1/TuiCss/blob/master/dist/tuicss.css) | MIT
[tw-animate-css](https://github.com/Wombosvideo/tw-animate-css/blob/main/src/tw-animate.css) | MIT
[UIkit](https://github.com/uikit/uikit/blob/develop/dist/css/uikit.css) | MIT
[Universal.css](https://raw.githubusercontent.com/marmelab/universal.css/refs/heads/master/universal.css) | WTFPL
[USWDS](https://unpkg.com/@uswds/uswds@3.13.0/dist/css/uswds.css) | CC0-1.0
[VitePress](https://github.com/vuejs/vitepress/blob/v1.6.4/src/client/theme-default/styles/components/vp-doc.css) | MIT
[Vivify](https://github.com/Martz90/vivify/blob/master/vivify.css) | MIT
[Voxels](https://github.com/HunterLarco/voxel.css/blob/master/src/voxel.css) | MIT
[Water](https://cdn.jsdelivr.net/npm/water.css@2.1.1/out/water.css) | MIT
[Weather Icons](https://github.com/erikflowers/weather-icons/tree/master/css) | MIT
[Webgradients](https://github.com/itmeo/webgradients/blob/master/webgradients.css) | MIT
[Windows 98](https://github.com/yocontra/windows_98.css/blob/master/dist/win98.css) | MIT
[Wing](https://github.com/kbrsh/wing/blob/master/dist/wing.css) | MIT
[WTF Forms](https://github.com/mdo/wtf-forms/blob/master/wtf-forms.css) | MIT
[Zotero Dark Theme](https://github.com/Rosmaninho/Zotero-Dark-Theme/blob/main/userChrome.css) | GPL-3.0
