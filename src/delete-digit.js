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
  throw new NotImplementedError('Not implemented');
  let nStr = String(n); 
  let nArr=Array.from((nStr), Number);    
  let minNum=[...nArr].sort()[0];
  let newArr=nArr.filter((elem)=> elem!=minNum);
  let newNum=+newArr.join('');
return newNum;
}

module.exports = {
  deleteDigit
};
