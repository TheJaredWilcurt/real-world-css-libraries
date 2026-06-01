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
const bytes = total.toLocaleString();
const MB = Math.round((total / 1024 / 1024) * 100) / 100;
console.log('TOTAL: ' + bytes + ' bytes or ' + MB + ' MB.');
