const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let outString = '';
  let repeatAddString = '';

  var repeatTimes = options.repeatTimes;
  if (options.separator !== undefined ) {
    var separator   = options.separator;
  } else {
    var separator = '+';
  }

  var addition    = options.addition;
  var additionRepeatTimes     = options.additionRepeatTimes;
  if (options.additionSeparator !== undefined) {
    var additionSeparator = options.additionSeparator;
  } else {
    var additionSeparator = '|';
  }
  if (addition !== undefined) {
    repeatAddString += addition;
  }
  if (additionRepeatTimes) {
    for (let i = 0; i < additionRepeatTimes-1; i++) {
      repeatAddString+= additionSeparator + addition;
    }
  }
  outString += str + repeatAddString;
  if (repeatTimes) {
    for (let i = 0; i < repeatTimes-1; i++) {
      outString += separator + str + repeatAddString;
    }
  }
  return outString;
}

module.exports = {
  repeater
};
