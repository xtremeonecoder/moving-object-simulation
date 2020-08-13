/**
 * Moving Object Simulation - DataProcessor.js
 *
 * @category   NodeJS Application
 * @package    moving-object-simulation
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 **/

const { COMMANDS } = require("./config.json");

class DataProcessor {
  /**
   * Creates a new DataProcessor.
   * @class
   */
  constructor() {
    this._commandMaxValue = COMMANDS.MAXVALUE;
  }

  /**
   * The last command in the object i.e. max allowed value for commands
   * @type {number}
   */
  set commandMaxValue(commandMaxValue) {
    this._commandMaxValue = commandMaxValue;
  }

  get commandMaxValue() {
    return this._commandMaxValue;
  }

  /**
   * Parses the input and converts it from String to ArrayOfIntegers.
   * @param {String} userInputData Contains the user input in string format
   * @returns {Boolean} returns true if user pass valid input string, otherwise false.
   */
  isUserInputStringValid(userInputData) {
    userInputData = userInputData.trim();
    if (userInputData.length <= 0) return false;
    else if (userInputData === "") return false;
    else if (userInputData === null) return false;

    return true;
  }

  /**
   * Parses the input and converts it from String to ArrayOfIntegers.
   * @param {String} userInputData Contains the user input in string format
   * @returns {Array} Containes the user input in ArrayOfIntegers.
   */
  convertStringToArrayOfIntegers(userInputData) {
    const userInputArray = [];
    userInputData = userInputData.trim().split(",");
    userInputData.map((item) => {
      if (item !== "") userInputArray.push(parseInt(item));
    });

    return userInputArray;
  }

  /**
   * Checks the box-size and object-position are valid, only 4 positive integers are allowed.
   * @param {Array} arrayOfIntegers The user input containing box-size and object-position
   * @returns {boolean} true If the user input contains valid characters and values
   */
  checkBoxSizeAndObjectPosition(arrayOfIntegers) {
    if (arrayOfIntegers.length !== 4) return false;
    else if (arrayOfIntegers.find((item) => item < 0)) return false;
    // else if (arrayOfIntegers.find((item) => isNaN(item) === true)) return false;

    return true;
  }

  /**
   * Checks the simulation commands are valid, only 0-4 positive integers are allowed.
   * @param {Array} arrayOfIntegers The array of integers containing the simulation commands
   * @returns {boolean} True if the command contains valid characters and values
   */
  checkValidationForSimulationCommands(arrayOfIntegers) {
    if (arrayOfIntegers.length === 0) return false;
    else if (arrayOfIntegers[0] !== 1) return false;
    else if (arrayOfIntegers[arrayOfIntegers.length - 1] !== 0) return false;
    else if (arrayOfIntegers.find((item) => item < 0 || item > 4)) return false;

    return true;
  }
}

module.exports = DataProcessor;
