/**
 * @param {string} data
 */
function main(data) {
  const inputArr = data.split('\n').map((v) => Number.parseInt(v, 10));

  const seen = new Set();

  let res;

  inputArr.some((num) => {
    const mate = 2020 - num;

    if (seen.has(mate)) {
      res = mate * num;
      return true;
    }

    seen.add(num);
    return false;
  });

  return res;
}

module.exports = main;
