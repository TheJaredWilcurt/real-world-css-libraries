# real-world-css-libraries

Repository of unminified, real-world, CSS files from open source projects.

For use in minification tests and tooling benchmarks.


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
 *     name: '960.gs',
 *     version: 'v1.0.0',
 *     license: 'MIT or GPL',
 *     source: '/*\n  960 Grid System ~ Core CSS.\n  Learn more ~ http://9...',
 *     size: 9989
 *   },
 *   {
 *     name: 'Animate',
 *     version: 'v4.1.1',
 *     license: 'Hippocratic License v2.1'
 *     source: '@charset "UTF-8";\n/*!\n * animate.css - https://animate.s...',
 *     size: 95377
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


## Adding a library

1. Ensure it is part of a public repo that has an open source license
1. Create a file in the `libs` folder with the name lowercased and hyphenated, then a `-v` followed by the version number (if the source is not versioned, use `0.0.0`), then `.css`
1. The first line of the file must follow this pattern for automation to work:
   * `[Slash][Asterisk][Space][URL_TO_SOURCE][Space][Asterisk][Slash][New line]`
   * **Example:**
      * `/* https://github.com/user/repo/tree/main/file.css */`
1. If the source does not use MIT license, update the `nameLicenseMap` in `index.js`.
1. Run `npm t`, this will preview the output and update the list of libraries in the `README.md`
   * If the new library's name needs correcting (like `Mycssrepo` should be `My CSS Repo`), update `nameMap` in `index.js` and run `npm t` again.


## Libraries included:

Library | License
:--     | :--
[960.gs](https://github.com/nathansmith/960-Grid-System/blob/master/code/css/960.css) | MIT or GPL
[98](https://github.com/jdan/98.css/blob/main/style.css) | MIT
[AdminLTE](https://github.com/ColorlibHQ/AdminLTE/blob/master/dist/css/adminlte.css) | MIT
[Animate](https://github.com/animate-css/animate.css/blob/main/animate.css) | Hippocratic License v2.1
[Animo](https://github.com/ThrivingKings/animo.js/blob/master/animate-animo.css) | MIT
[Animsition](https://github.com/blivesta/animsition/blob/master/dist/css/animsition.css) | MIT
[Awesome Bootstrap Checkbox](https://github.com/flatlogic/awesome-bootstrap-checkbox/blob/master/awesome-bootstrap-checkbox.css) | MIT
[Balloon](https://github.com/kazzkiq/balloon.css/blob/master/balloon.css) | MIT
[Basscss](https://app.unpkg.com/basscss@8.1.0/files/css/basscss-important.css) | MIT
[Beer CSS](https://unpkg.com/beercss@4.0.21/dist/cdn/beer.css) | MIT
[Bojler](https://unpkg.com/@slicejack/bojler@3.2.1/dist/inline.css) | MIT
[Bootstrap](https://github.com/twbs/bootstrap/releases/tag/v4.6.2) | MIT
[Bootstrap](https://github.com/twbs/bootstrap/releases/tag/v5.3.8) | MIT
[Bttn](https://github.com/ganapativs/bttn.css/blob/master/dist/bttn.css) | MIT
[Bulma](https://github.com/jgthms/bulma/blob/main/css/bulma.css) | MIT
[Carbon](https://unpkg.com/@carbon/styles@1.107.0/css/styles.css) | Apache 2.0
[Chota](https://github.com/jenil/chota/blob/main/dist/chota.css) | MIT
[Cirrus](https://github.com/Spiderpig86/Cirrus/blob/master/dist/cirrus.css) | MIT
[Concise](https://unpkg.com/concise.css@4.1.2/dist/concise.css) | MIT
[CrookedStyleSheets](https://github.com/jbtronics/CrookedStyleSheets/blob/master/screen.css) | MIT
[cs16.css](https://github.com/ekmas/cs16.css/blob/main/css/cs16.css) | MIT
[CSS Diner](https://github.com/flukeout/css-diner/blob/develop/css/style.css) | MPL 2.0
[CSS Zen Garden #215](https://github.com/mezzoblue/csszengarden.com/blob/master/215/215.css) | CC BY-NC-SA 1.0
[cssicon](https://github.com/wentin/cssicon/tree/master/css) | CC0 1.0
[Destyle](https://github.com/nicolas-cusan/destyle.css/blob/master/destyle.css) | MIT
[Devices](https://unpkg.com/devices.css@0.2.0/dist/devices.css) | MIT
[Effeckt](https://github.com/h5bp/Effeckt.css/blob/master/css/effeckt.css) | MIT
[ElegantFin](https://github.com/lscambo13/ElegantFin/blob/main/Theme/ElegantFin-theme-v25.12.31.css) | MIT
[Flakes](https://github.com/kumailht/flakes/blob/master/css/all.css) | MIT
[Fomantic UI](https://github.com/fomantic/Fomantic-UI/blob/develop/dist/semantic.css) | MIT
[Font Awesome](https://github.com/FortAwesome/Font-Awesome/releases/tag/7.2.0) | MIT
[Foundation](https://github.com/foundation/foundation-sites/releases/tag/v6.9.0) | MIT
[GitHub-Dark](https://github.com/StylishThemes/GitHub-Dark/blob/master/github-dark.user.css) | BSD 2 Clause
[GitHub-Markdown](https://github.com/sindresorhus/github-markdown-css/blob/main/github-markdown.css) | MIT
[Gumby](https://github.com/GumbyFramework/Gumby/blob/master/css/gumby.css) | MIT
[Gutenberg](https://github.com/BafS/Gutenberg/blob/master/dist/gutenberg.css) | MIT
[Halfmoon](https://github.com/halfmoonui/halfmoon/blob/master/css/halfmoon.css) | MIT
[Hint](https://github.com/chinchang/hint.css/blob/master/hint.css) | MIT
[Instagram.css](https://github.com/picturepan2/instagram.css/blob/master/dist/instagram.css) | MIT
[Jupyter Themes](https://github.com/dunovank/jupyter-themes/blob/master/jupyterthemes/styles/compiled/gruvboxd.css) | MIT
[Loaders](https://github.com/ConnorAtherton/loaders.css/blob/master/loaders.css) | MIT
[Material for Bootstrap](https://github.com/Daemonite/material/blob/master/css/material.css) | MIT
[Meyer](https://meyerweb.com/eric/tools/css/reset/reset.css) | Public Domain
[Mini Reset](https://unpkg.com/minireset.css@0.0.7/minireset.css) | MIT
[Mini](https://github.com/Chalarangelo/mini.css/blob/master/dist/mini-dark.css) | MIT
[Mobi](https://github.com/mobi-css/mobi.css/blob/master/packages/mobi.css/dist/mobi.css) | MIT
[Modern CSS Resets](https://github.com/Andy-set-studio/modern-css-reset/blob/master/dist/reset.css) | MIT
[MVP](https://github.com/andybrewer/mvp/blob/master/mvp.css) | MIT
[Natural Selection](https://github.com/frontaid/natural-selection/blob/main/boilerplate.css) | MIT
[NES.css](https://unpkg.com/nes.css@2.3.0/css/nes.css) | MIT
[Normalize](https://github.com/necolas/normalize.css/blob/master/normalize.css) | MIT
[Obsidian Modular CSS Layout](https://github.com/efemkay/obsidian-modular-css-layout/blob/main/MCL%20Multi%20Column.css) | GPL 3.0
[Orbit](https://unpkg.com/@zumer/orbit@1.4.11/dist/orbit.css) | MIT
[Paper](https://github.com/cognitom/paper-css/blob/master/paper.css) | MIT
[PatternFly](https://unpkg.com/@patternfly/patternfly@6.5.2/patternfly.css) | MIT
[Photon](https://github.com/connors/photon/blob/master/dist/css/photon.css) | MIT
[Picnic](https://cdn.jsdelivr.net/npm/picnic@7.1.0/picnic.css) | MIT
[Pico](https://github.com/picocss/pico/blob/main/css/pico.conditional.css) | MIT
[Pretty Checkbox](https://github.com/lokesh-coder/pretty-checkbox/blob/master/dist/pretty-checkbox.css) | MIT
[Pure](https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure.css) | BSD
[Ratchet](https://github.com/twbs/ratchet/blob/master/dist/css/ratchet.css) | MIT
[Remedy Quotes](https://github.com/jensimmons/cssremedy/blob/master/css/quotes.css) | MPL 2.0
[Remedy](https://github.com/jensimmons/cssremedy/blob/master/css/remedy.css) | MPL 2.0
[Responsive](https://github.com/ResponsiveBP/Responsive/blob/v5-dev/dist/v4/responsive.css) | MIT
[Responsive](https://github.com/ResponsiveBP/Responsive/blob/v5-dev/dist/responsive.css) | MIT
[Ress](https://github.com/filipelinhares/ress/blob/master/ress.css) | MIT
[Sakura](https://github.com/oxalorg/sakura/blob/master/css/sakura.css) | MIT
[Sanitize](https://github.com/csstools/sanitize.css/blob/main/sanitize.css) | CC0 1.0
[Semantic UI](https://github.com/Semantic-Org/Semantic-UI/blob/master/dist/semantic.css) | MIT
[Shards](https://github.com/DesignRevision/shards-ui/blob/master/dist/css/shards.css) | MIT
[Simple Line Icons](https://github.com/thesabbir/simple-line-icons/blob/master/dist/styles/simple-line-icons.css) | MIT
[Simple](https://codeberg.org/kevquirk/simple.css/src/branch/main/simple.css) | MIT
[Skeleton](https://github.com/dhg/Skeleton/blob/master/css/skeleton.css) | MIT
[Spectre](https://github.com/picturepan2/spectre/blob/master/dist/spectre.css) | MIT
[Spicetify Dribbblish](https://github.com/spicetify/spicetify-themes/blob/master/Dribbblish/user.css) | MIT
[Spicetify Text](https://github.com/spicetify/spicetify-themes/blob/master/text/user.css) | MIT
[Spinkit](https://github.com/tobiasahlin/SpinKit/blob/master/spinkit.css) | MIT
[Stacks](https://unpkg.com/@stackoverflow/stacks@2.8.6/dist/css/stacks.css) | MIT
[System](https://github.com/sakofchit/system.css/blob/main/style.css) | MIT
[Tachyons](https://github.com/tachyons-css/tachyons/blob/main/css/tachyons.css) | MIT
[Tailwind](https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.css) | MIT
[The New CSS Reset](https://github.com/elad2412/the-new-css-reset/blob/main/css/reset.css) | MIT
[Toast](https://github.com/daneden/Toast/blob/master/css/grid.css) | MIT
[Tufte](https://unpkg.com/tufte-css@1.8.0/tufte.css) | MIT
[Tui](https://github.com/vinibiavatti1/TuiCss/blob/master/dist/tuicss.css) | MIT
[UIkit](https://github.com/uikit/uikit/blob/develop/dist/css/uikit.css) | MIT
[USWDS](https://unpkg.com/@uswds/uswds@3.13.0/dist/css/uswds.css) | CC0 1.0
[VitePress](https://github.com/vuejs/vitepress/blob/v1.6.4/src/client/theme-default/styles/components/vp-doc.css) | MIT
[Voxels](https://github.com/HunterLarco/voxel.css/blob/master/src/voxel.css) | MIT
[Water](https://cdn.jsdelivr.net/npm/water.css@2.1.1/out/water.css) | MIT
[Weather Icons](https://github.com/erikflowers/weather-icons/tree/master/css) | MIT
[Webgradients](https://github.com/itmeo/webgradients/blob/master/webgradients.css) | MIT
[Wing](https://github.com/kbrsh/wing/blob/master/dist/wing.css) | MIT
[WTF Forms](https://github.com/mdo/wtf-forms/blob/master/wtf-forms.css) | MIT
