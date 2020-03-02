const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },

  addLink(value) {
    if (value === null) {
      this.result.push('null');
      return this;
    }

    this.result.push(value);
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position > this.result.length - 1 || position <= 0) {
      this.result = [];
      throw new Error();
    }
    this.result.splice(position - 1, 1)
    return this;
  },

  reverseChain() {
    this.result.reverse();
    return this;
  },

  finishChain() {
    var fChain = '( ' + this.result.join(' )~~( ') + ' )';
    this.result = [];
    return fChain;
  }
};

module.exports = chainMaker;