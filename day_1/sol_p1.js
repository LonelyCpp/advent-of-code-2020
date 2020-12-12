const fs = require("fs");

const data = fs.readFileSync("./input.txt");

const inputArr = data
  .toString()
  .split("\n")
  .map((v) => Number.parseInt(v));

const seen = new Set();

for (let num of inputArr) {
  const mate = 2020 - num;

  if (seen.has(mate)) {
    console.log({ num, mate, sum: num + mate });
    console.log(mate * num);
    break;
  }

  seen.add(num);
}
