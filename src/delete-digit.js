const { NotImplementedError } = require('../extensions/index.js');

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
  let nStr = String(n); 
  let nArr=Array.from((nStr), Number);
  if (nArr.length==2) {
    nArr.sort((a,b)=> a-b);
    nArr.splice(0,1);
  }
  else {
    let minNumPos;
    for (let i=0; i<nArr.length; i++) {
      if (nArr[i]<nArr[i+1])
      minNumPos=i;
    }  
  nArr.splice(minNumPos, 1);
  }
  let newNum=+nArr.join('');
  return newNum;
}

module.exports = {
  deleteDigit
};
