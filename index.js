/**
 * Moving Object Simulation - index.js
 *
 * @category   NodeJS Application
 * @package    moving-object-simulation
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 **/

const Box = require("./Box.js");
const Objectt = require("./Objectt.js");
const Process = require("./Process.js");

/**
 * The Box-object mainly used to store
 * the size and to check the boundaries
 * @type {Box}
 */
const box = new Box();

// Contains size of the box [x,y]
box.size = [];

/**
 * The object in motion. It stores and
 * calculates the position and the direction.
 * @type {Objectt}
 */
const objectt = new Objectt();

// Will contain the position [x,y]
objectt.position = [];

// execute the simulation process
Process.executeProcess(box, objectt);
