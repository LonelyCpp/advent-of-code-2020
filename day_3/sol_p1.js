/**
 * @param {string} data
 */
function main(data) {
  // true => tree; false => free space
  const routeMap = data.split('\n').map((row) => {
    const arr = row.split('');
    return arr.map((block) => block === '#');
  });

  let posX = 0;
  let posY = 0;
  let treeCount = 0;
  const height = routeMap.length;
  const width = routeMap[0].length;

  while (posY < height - 1) {
    posY += 1;
    posX += 3;
    posX %= width;

    if (routeMap[posY][posX]) {
      treeCount += 1;
    }
  }

  return treeCount;
}

module.exports = main;
