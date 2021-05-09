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

const countActiveNeighbours = (x, y) => {
  let count = 0;

  [y - 1, y, y + 1].forEach((cY) => {
    [x - 1, x, x + 1].forEach((cX) => {
      if (cX !== x || cY !== y) {
        if (space[cY]?.[cX] === '#') {
          count += 1;
        }
      }
    });
  });

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
    } else if (currentNode === '#' && activeNeighbours > 3) {
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
