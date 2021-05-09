const fs = require('fs');

const data = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map((i) => Number(i));

const sorted = data.sort((a, b) => a - b);
sorted.push(sorted[sorted.length - 1] + 3);
sorted.unshift(0);

const joltDiffCountMap = { 1: 0, 2: 0, 3: 0 };

for (let i = 0; i < sorted.length - 1; i++) {
  const diff = sorted[i + 1] - sorted[i];

  joltDiffCountMap[diff] += 1;
}

console.log(joltDiffCountMap);
console.log(joltDiffCountMap[1] * joltDiffCountMap[3]);
