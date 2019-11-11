'use strict';
const chai = require('chai');
chai.should();
let BinaryHeap = require('./index');
describe('Binary Heap', () => {
  describe('Instantiation', () => {
    let bh = new BinaryHeap();
    it('binary heap should be object', () => {
      (typeof bh === 'object').should.be.equals(true);
    });
    it('binary heap should be instance of BinaryHeap', () => {
      (bh instanceof BinaryHeap).should.be.equals(true);
    });
    it('binary heap value length should be 0', () => {
      bh.value.length.should.be.equals(0);
    });
  });
  describe('Insert Method', () => {
    it('insert method should return undefined if no element is passed as argument', () => {
      let bh = new BinaryHeap();
      (bh.insert() === undefined).should.be.equals(true);
    });
    it('insert method should have value length of 1 when one element is in the heap', () => {
      let bh = new BinaryHeap();
      bh.insert(1);
      bh.value.length.should.be.equals(1);
    });
    it('binary heap value length should be 8', () => {
      let bh = new BinaryHeap();
      [1, 3, 20, 200, 500, 5000, 5, 7, 9, 20, 30, 31, 35].forEach(val => bh.insert(val));
      bh.value.length.should.be.equals(13);
    });
  });
  describe('extract max Method', () => {
    it('extract max method should return undefined if no element is in the heap', () => {
      let bh = new BinaryHeap();
      (bh.extractMax() === undefined).should.be.equals(true);
    });
    it('extract max should return 1 if only 1 is found in the heap and after that the length should be 0', () => {
      let bh = new BinaryHeap();
      bh.insert(1);
      bh.extractMax().should.be.equals(1);
      bh.value.length.should.be.equals(0);
    });
    it('extract max method should return the max value in the heap which is 5000', () => {
      let bh = new BinaryHeap();
      [1, 3, 20, 200, 500, 5000, 5, 7, 9, 20, 30, 31, 35].forEach(val => bh.insert(val));
      bh.extractMax().should.be.equals(5000);
      bh.extractMax().should.be.equals(500);
      bh.extractMax().should.be.equals(200);
      bh.extractMax().should.be.equals(35);
      bh.extractMax().should.be.equals(31);
      bh.extractMax().should.be.equals(30);
      bh.extractMax().should.be.equals(20);
    });
  });
});
