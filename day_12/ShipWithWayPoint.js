class Ship {
  #position = { x: 0, y: 0 };
  #waypoint = { x: 10, y: 1 };

  get info() {
    return {
      pos: { ...this.#position },
      wp: { ...this.#waypoint },
    };
  }

  get manDist() {
    return Math.abs(this.#position.x) + Math.abs(this.#position.y);
  }

  /**
   * move waypoint in given direction
   * @param {'E' | 'W' | 'N' | 'S'} dir
   * @param {number} magnitude
   */
  moveWaypoint(dir, magnitude) {
    switch (dir) {
      case 'E':
        this.#waypoint.x += magnitude;
        break;
      case 'W':
        this.#waypoint.x -= magnitude;
        break;

      case 'N':
        this.#waypoint.y += magnitude;
        break;
      case 'S':
        this.#waypoint.y -= magnitude;
        break;
    }
  }

  /**
   * rotate waypoint in the given direction
   * @param {'L' | 'R'} dir
   * @param {number} degrees
   */
  rotateWaypoint(dir, degrees) {
    const sign = dir === 'L' ? 1 : -1;
    const rad = (sign * (degrees * Math.PI)) / 180;

    const _sin = Math.sin(rad);
    const _cos = Math.cos(rad);

    const x = this.#waypoint.x * _cos - this.#waypoint.y * _sin;
    const y = this.#waypoint.x * _sin + this.#waypoint.y * _cos;

    this.#waypoint = { x, y };
  }

  /**
   * move ship forward in the direction of the waypoint
   * @param {number} magnitude
   */
  moveForward(magnitude) {
    this.#position.x += this.#waypoint.x * magnitude;
    this.#position.y += this.#waypoint.y * magnitude;
  }
}

module.exports = { Ship };
