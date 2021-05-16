const fs = require('fs');
const { Ship } = require('./Ship');

const input = fs.readFileSync('./input.txt').toString().split('\n');

const ship = new Ship();

input.forEach((instuction) => {
  const action = instuction[0];
  const value = Number(instuction.slice(1));

  switch (action) {
    case 'F':
      ship.moveInCurrentDir(value);
      break;

    case 'R':
    case 'L':
      ship.rotateRelative(action, value);
      break;

    case 'N':
    case 'S':
    case 'E':
    case 'W':
      ship.moveInDir(action, value);
      break;

    default:
      break;
  }
});

console.log('Manhattan distance:', ship.manDist);
