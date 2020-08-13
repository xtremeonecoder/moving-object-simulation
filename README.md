# Moving Object Simulation - NodeJS Application

The **_Moving Object Simulation_** is a NodeJS Application. This is a **_command line based program_** that will perform simple simulations of a moving object. The program reads from **_stdin_** and write to **_stdout_** according to a certain protocol.

## Task Brief

The task is to accept a set of commands and then simulate whether an object can move according to these commands without falling off the table it stands on. This is a three states simulation engine, like -

- Initializ Simulator
- Process Simulation
- Output and Restart

## Protocol

First, the solution reads a header from **_stdin_** like this:

- The size of the table as two integers [width, height]
- The objects starting position as two integers [x, y]

This is followed by an arbitrarily long stream of commands of integers. Once the simulation is complete, your program outputs the answer to **_stdout_** as per below:

- **If the simulation succeeded**: The objects final position as two integers [x, y]
- **If the simulation failed (the object falls off the table)**: [-1, -1] will be returned

## Commands

The object always has a direction (north, east, south or west). A simulation always starts with direction north. North means that if the object sits on [2, 4] and moves forward one step, the object will now stand on [2, 3]. The commands are:

- 0 = quit simulation and print results to stout
- 1 = move forward one step
- 2 = move backwards one step
- 3 = rotate clockwise 90 degrees (e.g. north to east)
- 4 = rotate counterclockwise 90 degrees (e.g. west to south)

## Example

If the program gets **_4,4,2,2_** as input, the table is initiated to size **_[4, 4]_** with the object in position **_[2, 2]_** with direction north. Then, commands **_1,4,1,3,2,3,2,4,1,0_** are read from **_stdin_** and executed. The final output would then be the end position of the object, in this case **_[0, 1]_**.

## System Requirements

- **Platform**: Windows, Linux
- **Run Time Environment**: NodeJS (tested on v12.18.3)
- **Package Manager**: Node Package Manager (NPM - v6.14.7)
- **IDE**: Visual Studio Code (or anything you like)

## Execution Demo

You can execute the application using following instructions:

- just download the application from the repo
- unzip the application and save it on your local machine
- open your terminal or command-line program
- cd to the program root directory
- once you are in the program root directory, just ping the **_index.js_** file using following command -

`node index.js`

If you want your code will automatically execute everytime you save the new code, then install **_nodemon_** NPM Package globally on your machine, and execute the following command once -

`nodemon index.js`

After that follow the instructions to execute the program. See the demo of the execution below -

![Application Execution Demo](https://github.com/xtremeonecoder/moving-object-simulation/blob/master/documentation/execution-demo.jpg)
