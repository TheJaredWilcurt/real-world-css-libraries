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

Library | License
:--     | :--
[960.gs](https://github.com/nathansmith/960-Grid-System/blob/master/code/css/960.css) | MIT or GPL
[animate](https://github.com/animate-css/animate.css/blob/main/animate.css) | Hippocratic License v2.1
[Bootstrap 4](https://github.com/twbs/bootstrap/releases/tag/v4.6.2) | MIT
[Bootstrap 5](https://github.com/twbs/bootstrap/releases/tag/v5.3.8) | MIT
[FontAwesome](https://github.com/FortAwesome/Font-Awesome/releases/tag/7.2.0) | MIT
[Foundation](https://github.com/foundation/foundation-sites/releases/tag/v6.9.0) | MIT
[Meyer](https://meyerweb.com/eric/tools/css/reset/) | Public Domain
[Mini](https://github.com/Chalarangelo/mini.css/blob/master/dist/mini-dark.css) | MIT
[Picnic](https://cdn.jsdelivr.net/npm/picnic@7.1.0/picnic.css) | MIT
[Pure](https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure.css) | BSD
[Tailwind 2](https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.css) | MIT
[Water.css](https://cdn.jsdelivr.net/npm/water.css@2.1.1/out/water.css) | MIT

Tailwind 2 was the last version that shipped with all CSS in one file.
