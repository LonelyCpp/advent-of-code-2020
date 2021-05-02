class Queue {
  #maxLength;
  #qArr;

  constructor(maxLength) {
    this.#maxLength = maxLength;
    this.#qArr = [];
  }

  remove = () => {
    const ele = this.#qArr[0];

    this.#qArr.shift();

    return ele;
  };

  #checkSum = (sum) => {
    const seen = new Set();

    return this.#qArr.some((num) => {
      const mate = sum - num;

      if (seen.has(mate)) {
        return true;
      }

      seen.add(num);
      return false;
    });
  };

  insert = (num) => {
    if (this.#qArr.length >= this.#maxLength) {
      const valid = this.#checkSum(num);
      if (!valid) {
        throw `cannot insert ${num}`;
      }

      this.remove();
    }

    this.#qArr.push(num);
  };

  // return a copy
  get queue() {
    return this.#qArr.map((i) => i);
  }
}

module.exports = { Queue };
