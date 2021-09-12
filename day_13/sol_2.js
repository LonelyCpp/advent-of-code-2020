/**
 * @param {string} data
 */
function main(data) {
  const [, l2] = data.split('\n');

  const busIds = l2
    .split(',')
    .filter((i) => i !== 'x')
    .map((i, idx) => ({
      offset: idx,
      id: Number.parseInt(i, 10),
    }));

  const buses = l2.split(',').map((bus) => (bus === 'x' ? 1 : Number(bus)));

  let time = 0;
  let stepSize = buses[0];

  for (let i = 1; i < buses.length; i += 1) {
    const bus = buses[i];

    while ((time + i) % bus !== 0) {
      time += stepSize;
    }

    stepSize *= bus;
  }

  return time;
}

module.exports = main;
