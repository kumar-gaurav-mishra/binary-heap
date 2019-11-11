'use strict';
class BinaryHeap {
  constructor() {
    this.value = [];
  }
  insert(element) {
    this.value.push(element);
    if (this.value.length <= 1) return this;
    let index = this.value.length - 1;
    while (index > -1) {
      let parent = Math.floor((index - 1) / 2);
      if (this.value[parent] < this.value[index]) {
        let temp = this.value[parent];
        this.value[parent] = this.value[index];
        this.value[index] = temp;
        index = parent;
      } else {
        return this;
      }
    }
    return this;
  }
  extractMax() {
    if (this.value.length === 0) return undefined;
    let max = this.value[0];
    if (this.value.length - 1 > 0) {
      this.value[0] = this.value.pop();
      const length = this.value.length;
      let index = 0;
      let element = this.value[0];
      while (true) {
        let swap = null;
        let leftIdx = 2 * index + 1;
        let rightIdx = 2 * index + 2;
        let leftChild, rightChild;
        if (leftIdx < length) {
          leftChild = this.value[leftIdx];
          if (leftChild > element) {
            swap = leftIdx;
          }
        }
        if (rightIdx < length) {
          rightChild = this.value[rightIdx];
          if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
            swap = rightIdx;
          }
        }
        if (swap === null) break;
        this.value[index] = this.value[swap];
        this.value[swap] = element;
        index = swap;
      }
    } else {
      this.value.pop();
    }

    return max;
  }
}
module.exports = BinaryHeap;
