/**
 * Moving Object Simulation - UtilityFunctions.js
 *
 * @category   NodeJS Application
 * @package    moving-object-simulation
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 **/

const { COMMANDS, OBJECT } = require("./config.json");

/**
 * initialize the size of box and postion of object on the box
 * @param {Array} userInputData The user input containing box-size and object-position
 * @param {Object} box the instance of box-class (matrix)
 * @param {Object} objectt the instance of objectt-class
 */
function initBoxSizeAndObjectPosition(userInputData, box, objectt) {
  // initialize box dimentions
  box.size = [userInputData[0], userInputData[1]];
  // initialize object position
  objectt.position = [userInputData[2], userInputData[3]];
}

/**
 *This function executes the simulation.
 * 0 = QUIT (quit simulation and print results to stdout)
 * 1 = FORWARD (move forward one step)
 * 2 = BACKWARD (move backwards one step)
 * 3 = ROTATE (rotate clockwise 90 degrees (e.g. NORTH to EAST))
 * 4 = COUNTERROTATE (rotate counterclockwise 90 degrees (e.g. WEST to SOUTH))
 * @param {Array} userInputCommands Contains all the commands from user input.
 * @param {Object} box the instance of box-class (matrix)
 * @param {Object} objectt the instance of objectt-class
 * @returns {number[]} Contains the position of the after the simulation
 */
function executeSimulation(userInputCommands, box, objectt) {
  // iterate through all the commands
  userInputCommands.map((command) => {
    // is Object Outside Of The Box, then return simulation failure
    if (box.isObjectOutsideOfTheBox(objectt.position)) {
      // setting initial object position
      objectt.position = OBJECT.OUTOFBOX;
      // return simulation failure (object out of the box)
      return objectt.position;
    }

    // make a move (forward or backward)
    if (Object.values(COMMANDS.MOVE).includes(command))
      objectt.move(command, COMMANDS.MOVE);
    // rotate the object (clockwise or anti-clockwise)
    else if (Object.values(COMMANDS.ROTATE).includes(command))
      objectt.rotate(command, COMMANDS.ROTATE);
    // quit simulation process
    else if (COMMANDS.QUIT === command) {
      if (isNaN(objectt.position[0]) || isNaN(objectt.position[1]))
        objectt.position = OBJECT.OUTOFBOX;

      return objectt.position;
    }
  });

  // if position contains invalid value set the OUTOFBOX
  if (isNaN(objectt.position[0]) || isNaN(objectt.position[1]))
    objectt.position = OBJECT.OUTOFBOX;

  return objectt.position;
}

/**
 * For future use, rotating the box.
 */
function rotatingTheBox() {
  // code goes here...
}

module.exports = {
  rotatingTheBox,
  executeSimulation,
  initBoxSizeAndObjectPosition,
};
