/**
 * this solution was given by a redditor -
 * https://www.reddit.com/r/adventofcode/comments/k8zdx3/day_8_part_2_without_bruteforce/gf19rwx/
 *
 * 1. compute all indexes from which the program will end (END_SET)
 * 2. start execution from position (0)
 * 3. if this position is not in END_SET, try to flip it.
 * 3.1 If the flip leads to a position in END_SET - continue new path till end
 * 3.2 if not, continue execution
 *
 * complexity: o(n) + o(n)
 * space: o(n) + o(n)
 */
const fs = require('fs');

const inp = fs.readFileSync('./input.txt').toString();

const instructions = inp.split('\n').map((ins) => {
  const [cmd, val] = ins.trim().split(' ');
  return {
    cmd,
    val: Number(val),
  };
});

const willEnd = new Set();
const willLoop = new Set();

instructions.forEach((_, pos) => {
  if (willEnd.has(pos) || willLoop.has(pos)) {
    return;
  }

  let currentPosition = pos;
  const visitList = new Set();

  while (currentPosition < instructions.length) {
    if (willEnd.has(currentPosition)) {
      break;
    }

    if (willLoop.has(currentPosition) || visitList.has(currentPosition)) {
      visitList.forEach((v) => willLoop.add(v));
      return;
    }

    visitList.add(currentPosition);

    const { cmd, val } = instructions[currentPosition];

    if (cmd === 'jmp') {
      currentPosition += val;
    } else {
      currentPosition += 1;
    }
  }

  visitList.forEach((v) => willEnd.add(v));
});

let currentPosition = 0;
let acc = 0;

while (currentPosition < instructions.length) {
  const { cmd, val } = instructions[currentPosition];

  if (willLoop.has(currentPosition)) {
    let nextIndex;
    if (cmd === 'nop') {
      nextIndex = currentPosition + val;
    } else if (cmd === 'jmp') {
      nextIndex = currentPosition + 1;
    }

    if (willEnd.has(nextIndex)) {
      console.log('flipped position', currentPosition, cmd);
      currentPosition = nextIndex;
      continue;
    }
  }

  switch (cmd) {
    case 'jmp':
      currentPosition += val;
      break;

    case 'acc':
      acc += val;
      currentPosition += 1;
      break;

    default:
      currentPosition += 1;
  }
}

console.log({ acc });
