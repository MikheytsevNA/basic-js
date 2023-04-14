//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let counter = [];
    arr.forEach(element => {
      counter.push(1);
      if (Array.isArray(element)) {
        counter[counter.length-1] += this.calculateDepth(element);
      };
    });
    if (counter.length == 0) {
      return 1;
    }
    return Math.max(...counter);
  }
}

module.exports = {
  DepthCalculator
};
