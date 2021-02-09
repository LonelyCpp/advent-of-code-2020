const fs = require('fs');

const data = fs.readFileSync('./input.txt').toString();

let count = 0;

data.split('\n\n').forEach((group) => {
  const trimmed = group.trim().replace(/\n/g, '');
  const uniq = new Set(trimmed);
  count += uniq.size;
});

console.log({ count });
