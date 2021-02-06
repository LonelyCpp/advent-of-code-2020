const fs = require('fs');

const inp = fs.readFileSync('./input.txt').toString();

const instructions = inp.split('\n');

let currentPosition = 0;
let acc = 0;

const visitList = new Set();

while (currentPosition < instructions.length) {
  if (visitList.has(currentPosition)) {
    break;
  } else {
    visitList.add(currentPosition);
  }

  const inst = instructions[currentPosition];
  const [cmd, val] = inst.trim().split(' ');

  switch (cmd) {
    case 'acc':
      acc += Number(val);
      currentPosition += 1;
      break;

    case 'jmp':
      currentPosition += Number(val);
      break;

    default:
      currentPosition += 1;
  }
}

console.log({ acc });
