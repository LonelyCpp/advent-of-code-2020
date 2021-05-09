const fs = require('fs');

const data = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map((i) => Number(i));

const max = Math.max(...data) + 3;

const adapterSet = new Set(data);
adapterSet.add(0);
adapterSet.add(max);

const cache = new Map();

const routeCounter = (val) => {
  // successfully reached the end
  if (val === max) {
    return 1;
  }

  if (adapterSet.has(val)) {
    if (cache.has(val)) {
      return cache.get(val);
    }

    const route1 = routeCounter(val + 1);
    const route2 = routeCounter(val + 2);
    const route3 = routeCounter(val + 3);
    const res = route1 + route2 + route3;

    cache.set(val, res);
    return res;
  }

  // could not reach the end
  return 0;
};

const routeCount = routeCounter(0);
console.log({ routeCount });
