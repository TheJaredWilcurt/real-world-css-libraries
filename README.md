# real-world-css-libraries

Repository of unminified, real-world, CSS files from open source projects.

For use in minification tests.

You can `npm i --save-dev real-world-css-libraries` to have a local copy
of these libraries to use. There is also a synchronous function to run to
get all the data in an array of objects.

```js
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
 *     file: '960.gs-v1.0.0.css',
 *     version: 'v1.0.0',
 *     library: '960.gs',
 *     license: 'MIT or GPL',
 *     source: '/*\n  960 Grid System ~ Core CSS.\n  Learn more ~ http://9...',
 *     size: 9989
 *   },
 *   {
 *     file: 'animate-v4.1.1.css',
 *     version: 'v4.1.1',
 *     library: 'Animate',
 *     license: 'Hippocratic License v2.1'
 *     source: '@charset "UTF-8";\n/*!\n * animate.css - https://animate.s...',
 *     size: 95377
 *   },
 *   ...
 * ]
 */
```

Library                                                                               | License
:--                                                                                   | :--
[960.gs](https://github.com/nathansmith/960-Grid-System/blob/master/code/css/960.css) | MIT or GPL
[98](https://github.com/jdan/98.css/blob/main/style.css)                              | MIT
[AdminLTE](https://github.com/ColorlibHQ/AdminLTE/blob/master/dist/css/adminlte.css)  | MIT
[Animate](https://github.com/animate-css/animate.css/blob/main/animate.css)           | Hippocratic License v2.1
[Balloon](https://github.com/kazzkiq/balloon.css/blob/master/balloon.css)             | MIT
[Bootstrap 4](https://github.com/twbs/bootstrap/releases/tag/v4.6.2)                  | MIT
[Bootstrap 5](https://github.com/twbs/bootstrap/releases/tag/v5.3.8)                  | MIT
[Bulma](https://github.com/jgthms/bulma/blob/main/css/bulma.css)                      | MIT
[Destyle](https://github.com/nicolas-cusan/destyle.css/blob/master/destyle.css)       | MIT
[Effeckt](https://github.com/h5bp/Effeckt.css/blob/master/css/effeckt.css)            | MIT
[FontAwesome](https://github.com/FortAwesome/Font-Awesome/releases/tag/7.2.0)         | MIT
[Foundation](https://github.com/foundation/foundation-sites/releases/tag/v6.9.0)      | MIT
[GitHub-Dark](https://github.com/StylishThemes/GitHub-Dark/blob/master/github-dark.user.css) | BSD 2 Clause
[Jupyter Themes](https://github.com/dunovank/jupyter-themes/blob/master/jupyterthemes/styles/compiled/gruvboxd.css) | MIT
[Loaders](https://github.com/ConnorAtherton/loaders.css/blob/master/loaders.css)      | MIT
[Meyer](https://meyerweb.com/eric/tools/css/reset/)                                   | Public Domain
[Mini](https://github.com/Chalarangelo/mini.css/blob/master/dist/mini-dark.css)       | MIT
[Normalize](https://github.com/necolas/normalize.css/blob/master/normalize.css)       | MIT
[Pico](https://github.com/picocss/pico/blob/main/css/pico.conditional.css)            | MIT
[Picnic](https://cdn.jsdelivr.net/npm/picnic@7.1.0/picnic.css)                        | MIT
[Photon](https://github.com/connors/photon/blob/master/dist/css/photon.css)           | MIT
[Pure](https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure.css)                     | BSD
[Ratchet](https://github.com/twbs/ratchet/blob/master/dist/css/ratchet.css)           | MIT
[Ress](https://github.com/filipelinhares/ress/blob/master/ress.css)                   | MIT
[Skeleton](https://github.com/dhg/Skeleton/blob/master/css/skeleton.css)              | MIT
[Spectre](https://github.com/picturepan2/spectre/blob/master/dist/spectre.css)        | MIT
[Spinkit](https://github.com/tobiasahlin/SpinKit/blob/master/spinkit.css)             | MIT
[Tachyons](https://github.com/tachyons-css/tachyons/blob/main/css/tachyons.css)       | MIT
[Tailwind](https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.css)                    | MIT
[Water.css](https://cdn.jsdelivr.net/npm/water.css@2.1.1/out/water.css)               | MIT
