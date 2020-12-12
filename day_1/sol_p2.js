const fs = require("fs");

const data = fs.readFileSync("./input.txt");

const inputArr = data
  .toString()
  .split("\n")
  .map((v) => Number.parseInt(v));

const main = () => {
  for (let numMaster of inputArr) {
    if (numMaster > 2020) {
      continue;
    }

    const sumToFind = 2020 - numMaster;

    const seen = new Set();
    for (let num of inputArr) {
      const mate = sumToFind - num;

      if (seen.has(mate)) {
        console.log({ numMaster, num, mate, sum: numMaster + num + mate });
        console.log(mate * num * numMaster);
        return;
      }

      seen.add(num);
    }
  }
};

main();
