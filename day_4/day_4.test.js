const fs = require('fs');
const p1 = require('./sol_p1');
const p2 = require('./sol_p2');

const input = fs.readFileSync('./day_4/input.txt').toString();

describe('day 4', () => {
  test('part 1', () => {
    expect(p1(input)).toBe(264);
  });

  test('part 2', () => {
    expect(p2(input)).toBe(224);
  });
});
