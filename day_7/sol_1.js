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

const yesList = new Set();
const noList = new Set();

const canContain = (host) => {
  if (yesList.has(host)) {
    return true;
  }

  if (noList.has(host)) {
    return false;
  }

  if (rules[host][bagToCarry]) {
    yesList.add(host);
    return true;
  }

  const contents = Object.keys(rules[host]);
  for (let i = 0; i < contents.length; i += 1) {
    const can = canContain(contents[i]);

    if (can) {
      yesList.add(host);
      yesList.add(contents[i]);
      return true;
    }

    noList.add(contents[i]);
  }

  noList.add(host);
  return false;
};

Object.keys(rules).forEach((host) => {
  canContain(host);
});

console.log(yesList.size);
