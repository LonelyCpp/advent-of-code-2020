const fs = require('fs');
const { Ship } = require('./ShipWithWayPoint');

const input = fs.readFileSync('./input.txt').toString().split('\n');

const ship = new Ship();

input.forEach((instuction) => {
  const action = instuction[0];
  const value = Number(instuction.slice(1));

  switch (action) {
    case 'F':
      ship.moveForward(value);
      break;

    case 'R':
    case 'L':
      ship.rotateWaypoint(action, value);
      break;

    case 'N':
    case 'S':
    case 'E':
    case 'W':
      ship.moveWaypoint(action, value);
      break;

    default:
      break;
  }
});

console.log('Manhattan distance:', ship.manDist);
