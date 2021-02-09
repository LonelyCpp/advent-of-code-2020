const fs = require('fs');

const data = fs.readFileSync('./input.txt').toString();

let count = 0;

data.split('\n\n').forEach((group) => {
  const sheets = group.trim().split('\n');

  const tracker = new Set(sheets.pop());

  sheets.forEach((sheet) => {
    const sheetSet = new Set(sheet);
    const tmp = new Set(tracker);

    tmp.forEach((item) => {
      if (!sheetSet.has(item)) {
        tracker.delete(item);
      }
    });
  });

  count += tracker.size;
});

console.log({ count });
