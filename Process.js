/**
 * Moving Object Simulation - Process.js
 *
 * @category   NodeJS Application
 * @package    moving-object-simulation
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 **/

const DataProcessor = require("./DataProcessor.js");
const Utility = require("./UtilityFunctions");
const { STATES, COMMANDS, INSTRUCTION, DIRECTIONS } = require("./config.json");

/**
 * the state is set to initialization step
 * @type {number}
 */
let state = STATES.INITIALIZATION;

/**
 * Process all the user input data. It formats and validates the input.
 * @type {DataProcessor}
 */
const dataProcessor = new DataProcessor();

// Max value for a command
dataProcessor.commandMaxValue = COMMANDS.MAXVALUE;

/**
 * This function controls the simulation process and
 * displays all the instructions and results
 * @param {Object} box the instance of box-class (matrix)
 * @param {Object} objectt the instance of objectt-class
 */
function executeProcess(box, objectt) {
  // data encoding
  process.stdin.setEncoding("utf-8");
  process.stdout.setEncoding("utf-8");

  // show initialization message
  console.log(INSTRUCTION.INITIALIZATION);

  /**
   * This is the main function, it reads
   * the input and has a state machine
   */
  process.stdin.on("data", function (userInputData) {
    /**
     * @type {Array}
     */
    let arrayOfIntegers;

    // State = 1 (Initialization)
    // State= 2 (Execute Simulation)
    // State = 3 (Output & Restart)
    switch (state) {
      case STATES.INITIALIZATION:
        // validate user input string
        if (!dataProcessor.isUserInputStringValid(userInputData)) {
          // print generic error message
          console.log(INSTRUCTION.ERROR);
          break;
        }

        // convert the user's string input to array of integers
        arrayOfIntegers = dataProcessor.convertStringToArrayOfIntegers(
          userInputData
        );

        // check validation for user input (box-size and object-position)
        if (dataProcessor.checkBoxSizeAndObjectPosition(arrayOfIntegers)) {
          // initialize box-size and object-position
          Utility.initBoxSizeAndObjectPosition(arrayOfIntegers, box, objectt);
          // initialize the state to execute simulation
          state = STATES.SIMULATION;
          // print help menu for users
          console.log(INSTRUCTION.HELPER_MANUAL.join("\n"));
        } else {
          // print generic error message
          console.log(INSTRUCTION.ERROR);
        }
        break;
      case STATES.SIMULATION:
        // validate user input string
        if (!dataProcessor.isUserInputStringValid(userInputData)) {
          // print generic error message
          console.log(INSTRUCTION.ERROR);
          break;
        }

        // convert the user's string input to array of integers
        arrayOfIntegers = dataProcessor.convertStringToArrayOfIntegers(
          userInputData
        );

        // check validation for user input (simulation commands)
        if (
          dataProcessor.checkValidationForSimulationCommands(arrayOfIntegers)
        ) {
          // execute simulation and prints the output
          const position = Utility.executeSimulation(
            arrayOfIntegers,
            box,
            objectt
          );
          console.log("Object's Current Position: [" + position + "]");
          // initialize the state to restart
          state = STATES.RESTART;
          // print generic message
          console.log(INSTRUCTION.RESTART);
        } else {
          // print generic error message
          console.log(INSTRUCTION.ERROR);
        }
        break;
      case STATES.RESTART:
        // initialize the state to start-point
        state = STATES.INITIALIZATION;
        // set default direction to 1, e.g. NORTH
        objectt.direction = DIRECTIONS.NORTH;
        // show initialization message
        console.log(INSTRUCTION.INITIALIZATION);
        break;
      default:
    }
  });
}

module.exports = { executeProcess };
