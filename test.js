'use strict';
const chai = require('chai');
chai.should();
let BinaryHeap = require('./index');
describe('Binary Heap', () => {
  describe('Instantiation', () => {
    let bh = new BinaryHeap();
    it('bh should be object', () => {
      (typeof bh === 'object').should.be.equals(true);
    });
    it('bh should be instance of BinaryHeap', () => {
      (bh instanceof BinaryHeap).should.be.equals(true);
    });
  });
});
