const fs = require('fs');

const inp = fs.readFileSync('./input.txt').toString();

const contentRegex = /(\d+) (.*)(s\b|\b)/;
const rules = {};

inp.split('\n').forEach((line) => {
  const [container, contentsStr] = line
    .split('bags contain')
    .map((i) => i.trim());

  const contents = {};
  contentsStr
    .split(',')
    .map((i) => i.trim())
    .forEach((i) => {
      if (i !== 'no other bags.') {
        let name = null;
        let count = 0;

        [, count, name] = contentRegex.exec(i);

        count = Number(count);

        name = name.split(' ');
        name.pop();
        name = name.join(' ');

        contents[name] = count;
      }
    });

  rules[container] = contents;
});

const bagToCarry = 'shiny gold';

const countBags = (host) => {
  let sum = 0;
  const contents = Object.keys(rules[host]);

  contents.forEach((bag) => {
    const baseBagCount = rules[host][bag];
    sum += baseBagCount;

    const contains = countBags(bag);
    if (contains) {
      sum += baseBagCount * contains;
    }
  });

  return sum;
};

console.log(countBags(bagToCarry));
