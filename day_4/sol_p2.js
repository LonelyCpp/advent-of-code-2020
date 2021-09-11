function main(data) {
  const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  const validEyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

  const validator = {
    byr: (val) => {
      // byr (Birth Year) - four digits; at least 1920 and at most 2002.
      const byr = Number.parseInt(val, 10);
      return byr >= 1920 && byr <= 2002;
    },
    iyr: (val) => {
      // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
      const iyr = Number.parseInt(val, 10);
      return iyr >= 2010 && iyr <= 2020;
    },
    eyr: (val) => {
      // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
      const eyr = Number.parseInt(val, 10);
      return eyr >= 2020 && eyr <= 2030;
    },
    hgt: (val) => {
      // hgt (Height) - a number followed by either cm or in:
      // If cm, the number must be at least 150 and at most 193.
      // If in, the number must be at least 59 and at most 76.

      const height = Number.parseInt(val.slice(0, -2), 10);
      const unit = val.slice(-2);

      if (unit === 'cm') {
        return height >= 150 && height <= 193;
      }

      if (unit === 'in') {
        return height >= 59 && height <= 76;
      }

      return false;
    },

    // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
    hcl: (val) => val.match(/^#[a-f0-9]{6}$/i) !== null,

    // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
    ecl: (val) => validEyeColors.includes(val),

    // pid (Passport ID) - a nine-digit number, including leading zeroes.
    pid: (val) => val.length === 9 && Number.isFinite(Number.parseInt(val, 10)),

    // ignored, missing or not.
    cid: () => true,
  };

  const batch = data.split('\n\n');

  let validCount = 0;

  batch.forEach((passportStr) => {
    const invalid = requiredFields.some(
      (field) => passportStr.search(field) === -1,
    );

    if (invalid) {
      return;
    }

    const fields = passportStr.trim().replace(/\n/g, ' ').split(' ');

    const fieldInvalid = fields.some((field) => {
      const [key, val] = field.split(':');

      return !validator[key](val);
    });

    if (fieldInvalid) {
      return;
    }

    validCount += 1;
  });

  return validCount;
}

module.exports = main;
