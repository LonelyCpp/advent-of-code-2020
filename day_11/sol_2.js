const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString();

const SPACE_LEN = input.split('\n')[0].length;

const space = [];

for (let y = 0; y < SPACE_LEN; y += 1) {
  const xSpace = [];
  for (let x = 0; x < SPACE_LEN; x += 1) {
    xSpace.push('.');
  }
  space.push(xSpace);
}

// hof to iterate through this space
function iterSpace(cb) {
  for (let y = 0; y < SPACE_LEN; y += 1) {
    for (let x = 0; x < SPACE_LEN; x += 1) {
      cb(x, y);
    }
  }
}

// a function to "walk" the space
// returns the first non-floor space encountered
// each step is determined by the step parameters
function walk(startX, startY, xStep, yStep) {
  let tx = startX + xStep;
  let ty = startY + yStep;

  while (ty > -1 && ty < SPACE_LEN && tx > -1 && tx < SPACE_LEN) {
    const cur = space[ty][tx];
    if (cur === '#' || cur === 'L') {
      return cur;
    }

    ty += yStep;
    tx += xStep;
  }

  return '.';
}

const countActiveNeighbours = (x, y) => {
  let count = 0;

  const up = walk(x, y, 0, -1);
  const down = walk(x, y, 0, 1);

  const left = walk(x, y, -1, 0);
  const right = walk(x, y, 1, 0);

  const upLeft = walk(x, y, -1, -1);
  const upRight = walk(x, y, 1, -1);

  const downLeft = walk(x, y, -1, 1);
  const downRight = walk(x, y, 1, 1);

  [up, down, left, right, upRight, upLeft, downRight, downLeft].forEach(
    (dir) => {
      if (dir === '#') {
        count += 1;
      }
    },
  );

  return count;
};

function print() {
  console.log('-----');
  space.forEach((y) => {
    console.log(y.join(''));
  });
}

input.split('\n').forEach((j, jIndex) => {
  j.split('').forEach((i, iIndex) => {
    space[jIndex][iIndex] = i;
  });
});

let invertListLength = [];

do {
  const invertList = [];

  iterSpace((x, y) => {
    const currentNode = space[y][x];
    if (currentNode === '.') {
      return;
    }

    const activeNeighbours = countActiveNeighbours(x, y);

    if (currentNode === 'L' && activeNeighbours === 0) {
      invertList.push({ x, y });
    } else if (currentNode === '#' && activeNeighbours > 4) {
      invertList.push({ x, y });
    }
  });

  invertList.forEach((invItem) => {
    const sItem = space[invItem.y][invItem.x];
    space[invItem.y][invItem.x] = sItem === '#' ? 'L' : '#';
  });

  invertListLength = invertList.length;
} while (invertListLength > 0);

let occupiedSeats = 0;
iterSpace((x, y) => {
  if (space[y][x] === '#') {
    occupiedSeats += 1;
  }
});

console.log({ occupiedSeats });
