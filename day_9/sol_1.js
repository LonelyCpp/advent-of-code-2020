const fs = require('fs');
const { Queue } = require('./queue');

const data = fs.readFileSync('./input.txt');

const qu = new Queue(25);

data
  .toString()
  .split('\n')
  .map((n) => Number(n))
  .some((num) => {
    qu.insert(num);
    return false;
  });
