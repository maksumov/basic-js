/**
 * Your task is to create the object chainMaker that creates chains.
 * The finished chain is a string and looks like this:
 * '( value1 )~~( value2 )~~( value3 )'. The chainMaker has several
 * methods for creating chains and modifying them:
 *
 * - getLength returns the current chain length as a number;
 * - addLink(value) adds a link containing a string representation of the value to the chain;
 * - removeLink(position) removes a chain link in the specified position;
 * - reverseChain reverses the chain;
 * - finishChain ends the chain and returns it.
 * - addLink, reverseChain and removeLink methods are chainable, while the another
 *   ones are not.
 * - If addLink is called with no arguments, it adds an empty link ('( )') to the chain.
 * - If removeLink accepts invalid position (e.g. not a number, or a fractional number,
 *   or corresponding to a nonexistent link), it must throw an Error.
 * - After calling the finishChain method, the existing chain must be deleted,
 *   as if an Error was thrown.
 *
 * For example:
 *     chainMaker.addLink(1).addLink(2).addLink(3).finishChain() => '( 1 )~~( 2 )~~( 3 )'
 *     chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain() => '( 2 )~~( 3 )'
 *     chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain() => '( 2 )~~( 1 )~~( 3 )'
 */

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(String(value));
    return this;
  },

  removeLink(position) {
    if (
      isNaN(position) ||
      !Number.isInteger(position) ||
      !Array.from(this.chain.keys()).includes(position)
    ) {
      this.chain = [];
      throw new Error();
    }
    this.chain = this.chain.filter((_, i) => i !== position - 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.map((_) => `( ${_} )`).join('~~');
    this.chain = [];
    return result;
  },
};

module.exports = chainMaker;
