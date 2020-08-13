/**
 * Moving Object Simulation - Box.js
 *
 * @category   NodeJS Application
 * @package    moving-object-simulation
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 **/

const { BOX } = require("./config.json");

class Box {
  /**
   * Creates a new Box.
   * @class
   */
  constructor() {
    this._size = BOX.DEFAULTSIZE;
  }

  /**
   *  The size of this object [width,height]
   * @type {Array}
   */
  set size(size) {
    this._size = size;
  }

  get size() {
    return this._size;
  }

  /**
   * For future use, a two dimensional boolean-matrix as size as user defined box
   * which will be filled with 'true' or 'false' boolean values
   * cells with 'true' are allowed to visit, but cells with 'false' are not allowed to visit
   * @type {Array}
   */
  set matrix(matrix) {
    this._matrix = matrix;
  }

  get matrix() {
    return this._matrix;
  }

  /**
   * Checks whether the object is outside the box
   * @param {Array} position Contains the new position after a move [x,y]
   * @returns {boolean} True if the object is outside this box
   * */
  isObjectOutsideOfTheBox(position) {
    if (position[0] < 0 || position[0] >= this._size[0]) {
      return true;
    } else if (position[1] < 0 || position[1] >= this._size[1]) {
      return true;
    }

    return false;
  }
}

module.exports = Box;
