const fs = require("fs");

const data = fs.readFileSync("./input.txt");

const str = data
  .toString()
  .split("\n")
  .map((v) => Number.parseInt(v));

const seen = new Set();

for (let num of str) {
  const mate = 2020 - num;

  if (seen.has(mate)) {
    console.log(mate * num);
    break;
  }

  seen.add(num);
}
