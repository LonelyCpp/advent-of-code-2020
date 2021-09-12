/**
 * @param {string} data
 */
function main(data) {
  const [l1, l2] = data.split('\n');

  const arivalTime = Number.parseInt(l1, 10);

  const busIds = l2
    .split(',')
    .filter((i) => i !== 'x')
    .map((i) => Number.parseInt(i, 10));

  let nearest = {
    id: undefined,
    diff: Infinity,
  };

  busIds.forEach((id) => {
    const busTimestamp = Math.ceil(arivalTime / id) * id;
    const diff = busTimestamp - arivalTime;

    if (diff < nearest.diff) {
      nearest = { diff, id };
    }
  });

  return nearest.diff * nearest.id;
}

module.exports = main;
