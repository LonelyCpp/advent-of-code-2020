const fs = require('fs');

const MAIN_SUM = 20874512;

const inpList = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((i) => Number(i));

function findBounds() {
  for (let i = 0; i < inpList.length; i += 1) {
    let sum = 0;
    for (let j = i; j < inpList.length; j += 1) {
      sum += inpList[j];

      if (sum === MAIN_SUM) {
        console.log({ start: inpList[i], end: inpList[j] });
        return { start: i, end: j };
      }

      if (sum > MAIN_SUM) {
        break;
      }
    }
  }

  return { start: -1, end: -1 };
}

const bounds = findBounds();

const sliced = inpList.slice(bounds.start, bounds.end + 1);

let max = sliced[0];
let min = sliced[0];

sliced.forEach((num) => {
  if (num > max) {
    max = num;
  } else if (num < min) {
    min = num;
  }
});

console.log(max + min);
