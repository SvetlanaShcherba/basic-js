const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  throw new NotImplementedError('Not implemented');
  let posNegArr=[];
    let positiveArr=[];
    let posNeg=0;
    let posPositive=0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i]==-1) {
            posNegArr[posNeg]=i;
            posNeg++;
        } 
        else {
            positiveArr[posPositive]=arr[i];
            posPositive++;
        }
    }
    let newArr=positiveArr.sort();
    let pos=0; 
    for (let i=0; i<arr.length; i++) {
      if (i==posNegArr[pos]) {
        newArr.splice(i, 0, -1);
        pos++;
      }
    }
}

module.exports = {
  sortByHeight
};
