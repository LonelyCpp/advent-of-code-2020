const fs = require('fs');
const s1 = require('./sol_1');
const s2 = require('./sol_2');

describe('day 13', () => {
  test('part 1 sample', () => {
    const input = '939\n7,13,x,x,59,x,31,19';
    expect(s1(input)).toBe(295);
  });

  test('part 1', () => {
    const input = fs.readFileSync('./day_13/input.txt').toString();
    expect(s1(input)).toBe(2165);
  });

  test('part 2 sample', () => {
    const input = '939\n7,13,x,x,59,x,31,19';
    expect(s2(input)).toBe(1068781);
  });

  test('part 2', () => {
    const input = fs.readFileSync('./day_13/input.txt').toString();
    expect(s2(input)).toBe(534035653563227);
  });
});
