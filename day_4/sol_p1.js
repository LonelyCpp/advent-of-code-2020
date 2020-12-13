const fs = require('fs');

const data = fs.readFileSync('./input.txt').toString();

const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const batch = data.split('\n\n');

let validCount = 0;

batch.forEach((passportStr) => {
  const invalid = requiredFields.some(
    (field) => passportStr.search(field) === -1,
  );

  if (!invalid) {
    validCount += 1;
  }
});

console.log({ validCount });
