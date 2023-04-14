//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let mainList;
  let otherList;
  let existingLetters = new Array();
  var counter = 0;
  var index;
  if (s1.length >= s2.length) {
    mainList = s2.split('');
    otherList = s1.split('');
  } else {
    mainList = s1.split('');
    otherList = s2.split('');
  }
  console.log(mainList);
  for (let item of otherList) {
    console.log(item);
    console.log(existingLetters);
    console.log(mainList);
    console.log(counter);
    if (mainList.includes(item)) {
      index = mainList.indexOf(item);
      mainList.splice(index,1);
      counter++
    }
  }
  return counter;
}

//console.log(getCommonCharacterCount("aabcc", "adcaa"));
module.exports = {
  getCommonCharacterCount
};
