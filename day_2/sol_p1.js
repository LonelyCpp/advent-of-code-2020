/**
 * @param {string} data
 */
function main(data) {
  const inputArr = data.toString().split('\n');

  let validCount = 0;

  inputArr.forEach((input) => {
    const [policy, password] = input.split(': ');
    const [rangeStr, letter] = policy.split(' ');

    let [minOcc, maxOcc] = rangeStr.split('-');
    minOcc = Number.parseInt(minOcc);
    maxOcc = Number.parseInt(maxOcc);

    occCount = password.split('').filter((l) => l === letter).length;

    const valid = occCount >= minOcc && occCount <= maxOcc;
    if (valid) {
      validCount += 1;
    }
  });

  return validCount;
}

module.exports = main;
