/**
 * @param {string} data
 */
function main(data) {
  const inputArr = data.toString().split('\n');

  let validCount = 0;

  inputArr.forEach((input) => {
    const [policy, password] = input.split(': ');
    const [rangeStr, letter] = policy.split(' ');

    let [pos1, pos2] = rangeStr.split('-');

    pos1 = Number.parseInt(pos1) - 1;
    pos2 = Number.parseInt(pos2) - 1;

    const valid =
      (password.charAt(pos1) === letter) ^ (password.charAt(pos2) === letter);

    if (valid) {
      validCount += 1;
    }
  });

  return validCount;
}

module.exports = main;
