/**
 * Tower of Hanoi is famous mathematical puzzle of the 18th century. It consists
 * of three rods and a number of disks of different sizes, which can slide onto
 * any rod. The puzzle starts with the disks in a neat stack in ascending order
 * of size on one rod, the smallest at the top, thus making a conical shape.
 *
 * The objective of the puzzle is to move the entire stack to another rod,
 * obeying the following simple rules:
 *
 * - Only one disk can be moved at a time.
 * - Each move consists of taking the upper disk from one of the stacks and
 *   placing it on top of another stack or on an empty rod.
 * - No larger disk may be placed on top of a smaller disk.
 *
 * Your task is much easier than coming up with an algorithm that solves this
 * puzzle :)
 *
 * Implement the function calculateHanoi that accepts diskNumber and turnsSpeed
 * parameters. diskNumber is a number of disks and turnsSpeed is the speed of
 * moving discs (in turns per hour). Both parameters are numbers.
 *
 * calculateHanoi function returns an object with 2 properties:
 *
 * - turns (minimum number of turns to solve the puzzle)
 * - seconds (minimum number of seconds to solve the puzzle at a given turnsSpeed,
 *   seconds must be an integer, obtained from rounded down (floor) calculation result)
 *
 * You don't need to validate parameters.
 *
 * For example:
 *   calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 */

const calculateHanoi = (disksNumber, turnsSpeed) => ({
  turns: 2 ** disksNumber - 1,
  seconds: Math.floor(((2 ** disksNumber - 1) * 3600) / turnsSpeed),
});

module.exports = calculateHanoi;
