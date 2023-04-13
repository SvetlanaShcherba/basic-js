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
    // options.addition=options.addition||String(options.addition)||"";
    // options.addition=options.addition||"";
    options.addition= (options.addition !== undefined) ? `${options.addition}` : ""
    options.separator =options.separator  || '+';
    options.additionSeparator =options.additionSeparator || '|';
    options.repeatTimes=options.repeatTimes || 1;
    options.additionRepeatTimes=options.additionRepeatTimes || 1; 
    if (typeof str !== 'string') {
      str=String(str);
    }   
    if (options.repeatTimes==1) {
      options.separator="";
    }
    if (options.additionRepeatTimes==1) {
        options.additionSeparator="";
    }
    let strAdd='';
    if (options.addition) {
      strAdd=options.addition+options.additionSeparator;
      if (options.additionRepeatTimes>1) {
        strAdd=strAdd.repeat(options.additionRepeatTimes-1)+options.addition;
      }  
    }
    else {
      options.addition="";
    }
    
    let newStr;
    if (options.repeatTimes>1) {
      newStr=(str+strAdd+options.separator).repeat(options.repeatTimes-1)+str+strAdd;
    } else 
      newStr=(str+strAdd+options.separator).repeat(options.repeatTimes);
    return newStr;
  }


module.exports = {
  repeater
};
