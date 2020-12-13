const fs = require("fs");

const data = fs.readFileSync("./input.txt");

// true => tree; false => free space
const routeMap = data
  .toString()
  .split("\n")
  .map((row) => {
    const arr = row.split("");
    return arr.map((block) => block === "#");
  });

let currentRow = 0;
const height = routeMap.length;
const width = routeMap[0].length;

const routeConfig = [
  {
    step: { x: 1, y: 1 },
    treeCount: 0,
    posX: 0,
  },
  {
    step: { x: 3, y: 1 },
    treeCount: 0,
    posX: 0,
  },
  {
    step: { x: 5, y: 1 },
    treeCount: 0,
    posX: 0,
  },
  {
    step: { x: 7, y: 1 },
    treeCount: 0,
    posX: 0,
  },
  {
    step: { x: 1, y: 2 },
    treeCount: 0,
    posX: 0,
  },
];

while (currentRow < height - 1) {
  currentRow += 1;

  routeConfig.forEach((route) => {
    if (currentRow % route.step.y === 0) {
      route.posX += route.step.x;
      route.posX %= width;

      if (routeMap[currentRow][route.posX]) {
        route.treeCount += 1;
      }
    }
  });
}

const ans = routeConfig.reduce((acc, route) => {
  return acc * route.treeCount;
}, 1);

console.log({ ans });
