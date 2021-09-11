function main(data) {
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

  return validCount;
}

module.exports = main;
