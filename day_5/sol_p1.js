const fs = require('fs');

const boardingPasses = fs.readFileSync('./input.txt').toString().split('\n');

let highest = 0;

boardingPasses.forEach((bPass) => {
  let rowMin = 0;
  let rowMax = 127;

  let colMin = 0;
  let colMax = 7;

  bPass.split('').forEach((ch) => {
    const rowMid = Math.floor((rowMin + rowMax) / 2);
    const colMid = Math.floor((colMin + colMax) / 2);

    switch (ch) {
      case 'F':
        rowMax = rowMid;
        break;
      case 'B':
        rowMin = rowMid;
        break;
      case 'R':
        colMin = colMid;
        break;
      case 'L':
        colMax = colMid;
        break;
      default:
        // skip
        break;
    }
  });

  const id = rowMax * 8 + colMax;
  highest = Math.max(id, highest);
});

console.log({ highest });
