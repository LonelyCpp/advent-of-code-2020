const fs = require('fs');
const p1 = require('./sol_p1');
const p2 = require('./sol_p2');

const input = fs.readFileSync('./day_3/input.txt');

describe('day 3', () => {
  test('part 1', () => {
    expect(p1(input)).toBe(276);
  });

  test('part 2', () => {
    expect(p2(input)).toBe(7812180000);
  });
});
