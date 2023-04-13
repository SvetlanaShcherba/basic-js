const { NotImplementedError } = require('../extensions/index.js');

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
  let nameTeam;
  if (!Array.isArray(members)){
    nameTeam=false;
  }
  else {
    members=members.filter((item)=> typeof item ==="string");
  let strArr=[];
  for (let i=0; i<members.length; i++) {
    let word=members[i].trim();
    word=word.toUpperCase();
    strArr[i]=word[0];
  }
  strArr.sort();
  nameTeam=strArr.join("");
  nameTeam=nameTeam.toUpperCase();
  }
    return nameTeam;
}

module.exports = {
  createDreamTeam
};
