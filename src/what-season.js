const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let season;
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length) {
    throw new Error ("Invalid date!");
  } 
  else { 
      if (date.getMonth() < 2 || date.getMonth() > 10 ) {
        season='winter';
      };
      if (date.getMonth() < 5 && date.getMonth() > 1 ) {
        season='spring';
      };
      if (date.getMonth() < 8 && date.getMonth() > 4 ) {
        season='summer';
      };
      if (date.getMonth() < 11 && date.getMonth() > 7 ) {
        season='autumn';
      };
      return  season;  
    }
         
  }
  


module.exports = {
  getSeason
};
