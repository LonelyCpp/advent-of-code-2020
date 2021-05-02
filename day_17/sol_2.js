const input = `#####...
.#..##..
##.##.##
...####.
#.#...##
.##...#.
.#.#.###
#.#.#..#`;

const INP_LEN = input.split('\n')[0].length;
const MAX_CYCLES = 6;
const SPACE_LEN = INP_LEN + MAX_CYCLES * 2;

const space = [];

for (let w = 0; w < SPACE_LEN; w += 1) {
  const zSpace = [];
  for (let z = 0; z < SPACE_LEN; z += 1) {
    const ySpace = [];
    for (let y = 0; y < SPACE_LEN; y += 1) {
      const xSpace = [];
      for (let x = 0; x < SPACE_LEN; x += 1) {
        xSpace.push('.');
      }
      ySpace.push(xSpace);
    }
    zSpace.push(ySpace);
  }
  space.push(zSpace);
}

function iterSpace(cb) {
  for (let w = 0; w < SPACE_LEN; w += 1) {
    for (let z = 0; z < SPACE_LEN; z += 1) {
      for (let y = 0; y < SPACE_LEN; y += 1) {
        for (let x = 0; x < SPACE_LEN; x += 1) {
          cb(x, y, z, w);
        }
      }
    }
  }
}

const countActiveNeighbours = (x, y, z, w) => {
  let count = 0;

  [w - 1, w, w + 1].forEach((cW) => {
    [z - 1, z, z + 1].forEach((cZ) => {
      [y - 1, y, y + 1].forEach((cY) => {
        [x - 1, x, x + 1].forEach((cX) => {
          if (cW !== w || cX !== x || cY !== y || cZ !== z) {
            if (space[cW]?.[cZ]?.[cY]?.[cX] === '#') {
              count += 1;
            }
          }
        });
      });
    });
  });

  return count;
};

const midZ = Math.floor(SPACE_LEN / 2);
input.split('\n').forEach((j, jIndex) => {
  j.split('').forEach((i, iIndex) => {
    space[midZ][midZ][jIndex + MAX_CYCLES][iIndex + MAX_CYCLES] = i;
  });
});

for (let cycle = 0; cycle < MAX_CYCLES; cycle += 1) {
  const invertList = [];

  iterSpace((x, y, z, w) => {
    const activeNeighbours = countActiveNeighbours(x, y, z, w);
    const currentNode = space[w][z][y][x];

    if (currentNode === '#' && ![2, 3].includes(activeNeighbours)) {
      invertList.push({ x, y, z, w });
    } else if (currentNode === '.' && activeNeighbours === 3) {
      invertList.push({ x, y, z, w });
    }
  });

  invertList.forEach((invItem) => {
    const sItem = space[invItem.w][invItem.z][invItem.y][invItem.x];
    space[invItem.w][invItem.z][invItem.y][invItem.x] =
      sItem === '#' ? '.' : '#';
  });
}

let activeCount = 0;
iterSpace((x, y, z, w) => {
  const currentNode = space[w][z][y][x];

  if (currentNode === '#') {
    activeCount += 1;
  }
});

console.log(activeCount);
