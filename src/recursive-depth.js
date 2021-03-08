/**
 * Your task is to implement the class DepthCalculator with method
 * calculateDepth that takes an array and returns its depth.
 *
 * calculateDepth method must pass the given array recursively.
 * Depth of a flat array is 1. Method must correctly work with arrays
 * that contain no elements or contain empty arrays.
 *
 * For example:
 *
 *    const depthCalc = new DepthCalculator();
 *    depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 *    depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 *    depthCalc.calculateDepth([[[]]]) => 3
 */

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    return Array.isArray(arr)
      ? arr.length
        ? arr
            .map((elem) =>
              Array.isArray(elem) ? this.calculateDepth(elem, depth + 1) : depth
            )
            .sort((a, b) => b - a)[0]
        : depth
      : 0;
  }
};
