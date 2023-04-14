// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  var count = 0;
  for (let list of matrix) {
    for (let item of list) {
      //console.log(item);
      if (typeof item == 'string' && item == '^^') {
        console.log(item);
        count++;
      }
    }
  }

  return count;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

//console.log(countCats([[0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2]]));

module.exports = {
  countCats
};
