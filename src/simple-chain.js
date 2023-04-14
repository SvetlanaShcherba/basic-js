const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    value= (value !== undefined) ? ` ${value} ` : "( )";
    this.chain.push(`(${value})`);    
    return this;
  },
  removeLink(position) {
    if ((position.isNaN) || !(Number.isInteger(position)) || (1>position) || position>this.chain.length) {
      this.chain=[];
      throw new Error ('You can\'t remove incorrect link!');  
    }
    else {
      this.chain.splice(position-1, 1);
      return this;
    }   
  },
    
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let newChain=this.chain.join("~~");
    this.chain=[];
    return newChain;
  }
};


module.exports = {
  chainMaker
};
