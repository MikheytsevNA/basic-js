//const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15.0;
const HALF_LIFE_PERIOD = 5730.0;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (sampleActivity > MODERN_ACTIVITY) {
    return false;
  }
  const k = Math.log(2)/HALF_LIFE_PERIOD;
  if (!isNaN(sampleActivity) && typeof sampleActivity === 'string') {
    let t = Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity)/k))
    if (t > 0 && t!= Infinity) {
      return t;
    } else {
      return false;
    }
    
  } else {
    return false;
  }

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
//console.log(dateSample('1'));
module.exports = {
  dateSample
};