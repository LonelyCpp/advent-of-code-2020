class Ship {
  #angle = 0;
  #position = { x: 0, y: 0 };

  get info() {
    return {
      ...this.#position,
      angle: this.#angle,
    };
  }

  get manDist() {
    return Math.abs(this.#position.x) + Math.abs(this.#position.y);
  }

  /**
   * move in a direction (without turning)
   * @param {'E' | 'W' | 'N' | 'S'} dir
   * @param {number} magnitude
   */
  moveInDir(dir, magnitude) {
    switch (dir) {
      case 'E':
        this.#position.x += magnitude;
        break;
      case 'W':
        this.#position.x -= magnitude;
        break;

      case 'N':
        this.#position.y += magnitude;
        break;
      case 'S':
        this.#position.y -= magnitude;
        break;
    }
  }

  /**
   * turn left or right
   * @param {'L' | 'R'} dir
   */
  rotateRelative(dir, degree) {
    const rad = (degree * Math.PI) / 180;
    switch (dir) {
      case 'L':
        this.#angle += rad;
        break;

      case 'R':
        this.#angle -= rad;
        break;
    }
  }

  /**
   * move ship the the direction it's facing
   * @param {number} magnitude
   */
  moveInCurrentDir(magnitude) {
    this.#position.x = this.#position.x + magnitude * Math.cos(this.#angle);
    this.#position.y = this.#position.y + magnitude * Math.sin(this.#angle);
  }
}

module.exports = { Ship };
