/**
 * Moving Object Simulation - Objectt.js
 *
 * @category   NodeJS Application
 * @package    moving-object-simulation
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 **/

const { DIRECTIONS, OBJECT } = require("./config.json");

class Objectt {
  /**
   * Creates a new Objectt.
   * @class
   */
  constructor() {
    // default MUST be 1, i.e. towards NORTH
    this._direction = DIRECTIONS.NORTH;
    this._position = OBJECT.OUTOFBOX;
  }

  /**
   *  The position of this object [x,y]
   * @type {Array}
   */
  set position(position) {
    this._position = position;
  }

  get position() {
    return this._position;
  }

  /**
   * The direction of this object
   * @type {number}
   */
  set direction(direction) {
    this._direction = direction;
  }

  get direction() {
    return this._direction;
  }

  /**
   * Rotates this object
   * @param {number} command The command for the rotation is either clockwise (3) or anti-clockwise (4)
   * @param {object} rotation This object contains all the defined rotation commands
   */
  rotate(command, rotation) {
    if (command === rotation.CLOCKWISE) {
      this._direction++;
      // if direction > 4, then reset it to 1, i.e. NORTH
      if (this._direction > DIRECTIONS.WEST) {
        this._direction = DIRECTIONS.NORTH;
      }
    } else if (command === rotation.ANTICLOCKWISE) {
      this._direction--;
      // if direction < 1, then reset it to 4, i.e. WEST
      if (this._direction < DIRECTIONS.NORTH) {
        this._direction = DIRECTIONS.WEST;
      }
    }
  }

  /**
   * Moves this object
   * @param {number} command The command for the movement is either forward (1) or backward (2)
   * @param {object} movement This object contains all the defined movement commands
   */
  move(command, movement) {
    if (
      (command === movement.FORWARD && this._direction === DIRECTIONS.NORTH) ||
      (command === movement.BACKWARD && this._direction === DIRECTIONS.SOUTH)
    ) {
      this._position[1]--;
    } else if (
      (command === movement.FORWARD && this._direction === DIRECTIONS.SOUTH) ||
      (command === movement.BACKWARD && this._direction === DIRECTIONS.NORTH)
    ) {
      this._position[1]++;
    } else if (
      (command === movement.FORWARD && this._direction === DIRECTIONS.EAST) ||
      (command === movement.BACKWARD && this._direction === DIRECTIONS.WEST)
    ) {
      this._position[0]++;
    } else if (
      (command === movement.FORWARD && this._direction === DIRECTIONS.WEST) ||
      (command === movement.BACKWARD && this._direction === DIRECTIONS.EAST)
    ) {
      this._position[0]--;
    }
  }
}

module.exports = Objectt;
