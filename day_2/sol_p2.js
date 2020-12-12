const fs = require("fs");

const data = fs.readFileSync("./input.txt");

// const data = `1-3 a: abcde
// 1-3 b: cdefg
// 2-9 c: ccccccccc`;

const inputArr = data.toString().split("\n");

let validCount = 0;

inputArr.forEach((input) => {
  const [policy, password] = input.split(": ");
  const [rangeStr, letter] = policy.split(" ");

  let [pos1, pos2] = rangeStr.split("-");

  pos1 = Number.parseInt(pos1) - 1;
  pos2 = Number.parseInt(pos2) - 1;

  const valid =
    (password.charAt(pos1) === letter) ^ (password.charAt(pos2) === letter);

  if (valid) {
    validCount += 1;
  }
});

console.log({ validCount });
