/**
 * @param {string} data
 */
function main(data) {
  const inputArr = data.split('\n').map((v) => Number.parseInt(v, 10));

  let res;

  inputArr.some((numMaster) => {
    if (numMaster > 2020) {
      return false;
    }

    const sumToFind = 2020 - numMaster;

    const seen = new Set();

    return inputArr.some((num) => {
      const mate = sumToFind - num;

      if (seen.has(mate)) {
        res = mate * num * numMaster;
        return true;
      }

      seen.add(num);
      return false;
    });
  });

  return res;
}

module.exports = main;
