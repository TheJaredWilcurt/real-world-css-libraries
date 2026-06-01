import getRealWorldCSS from './index.js';

let total = 0;

const libraries = getRealWorldCSS()
  .map((library) => {
    total = total + library.size;
    return {
      ...library,
      source: library.source.slice(0, 20)
    };
  });

console.table(libraries);
console.log('TOTAL: ' + total.toLocaleString() + ' bytes');
