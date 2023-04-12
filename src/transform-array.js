const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  throw new NotImplementedError('Not implemented');
  let newArr=[...arr];
    if (Array.isArray(arr)) {
      for (let i=0; i<newArr.length; i++) {
        if (newArr[i]==='--discard-next' && i!==newArr.length-1 ) {
          newArr.splice(i, 2);
        }
        else if (newArr[i]==='--discard-next' && i==newArr.length-1 ) {
          newArr.splice(i, 1);
        }   
        else if (newArr[i]==="--discard-prev" && i!==0 ) {
          newArr.splice(i-1, 2);
        }
        else if (newArr[i]==="--discard-prev" && i==0 ) {
          newArr.splice(i, 1);
        }
        else if (newArr[i]==="--double-next" && i!==newArr.length-1) {
          newArr.splice(i, 1, newArr[i+1] );
        }
        else if (newArr[i]==="--double-next" && i==newArr.length-1) {
          newArr.splice(i, 1);
        }
        else if (newArr[i]==="--double-prev" && i!==0) {
          newArr.splice(i, 1, newArr[i-1]);
        }
        else if (newArr[i]==="--double-prev" && i==0) {
          newArr.splice(i, 1);
        }
      }
    }
    else 
      alert("'arr' parameter must be an instance of the Array!"); 
  return newArr;     
}

module.exports = {
  transform
};

     
