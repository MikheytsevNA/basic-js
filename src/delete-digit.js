//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = n.toString().split('');
  let tempArray;
  var listOfMax = [];
  for (let i = 0; i<array.length; i++) {
    tempArray = JSON.parse(JSON.stringify(array));
    tempArray.splice(i,1);
    listOfMax.push(parseInt(tempArray.reduce((accumulator, currentValue) => accumulator + currentValue)));
  }
  console.log(listOfMax);
  return Math.max(...listOfMax);
}

module.exports = {
  deleteDigit
};
