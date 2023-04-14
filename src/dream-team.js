//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  console.log(members);
  if (!Array.isArray(members)) {
    return false;
  }
  let teamName = '';
  for (let item of members){
    if (typeof item === "string") {
      var index = 0;
      if (item[0] == " ") {
        for (let i = 1; i < item.length; i++){
            if (item[i] != " ") {
              index = i;
              break;
            }
          }
      }
      teamName += item[index].toUpperCase();
    }
  }
  return teamName.split('').sort().join("");
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
module.exports = {
  createDreamTeam
};
