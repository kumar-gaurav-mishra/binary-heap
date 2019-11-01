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
    const length = this.value.length;
    if (length === 0) return undefined;
    let max = this.value[0];
    let index = 0;
    // this.value[0] = this.value[length - 1];
    // this.value.pop();
    // let index = 0;
    // while (true) {
    //   let left = 2 * index + 1;
    //   let right = 2 * index + 2;
    //   if (
    //     length > left &&
    //     this.value.right > right &&
    //     this.value[left] &&
    //     this.value[right] &&
    //     this.value[index] > this.value[left] &&
    //     this.value[index] > this.value[right]
    //   ) {
    //     let temp = this.value[index];
    //     if (this.value[left] > this.value[right]) {
    //       this.value[index] = this.value[left];
    //       this.value[left] = temp;
    //     } else {
    //       this.value[index] = this.value[right];
    //       this.value[right] = temp;
    //     }
    //   } else if (left < length && this.value[left] > this.value[index]) {
    //     if (this.value[left] > this.value[right]) {
    //       let temp = this.value[index];
    //       this.value[index] = this.value[left];
    //       this.value[left] = temp;
    //     }
    //   } else if (right < length && this.value[right] > this.value[index]) {
    //     let temp = this.value[index];
    //     this.value[index] = this.value[left];
    //     this.value[left] = temp;
    //   } else {
    //     break;
    //   }
    //   ++index;
    // }
    while (true) {
      let swap = null;
      let currentValue = this.value[index];
      let leftIdx = 2 * index + 1;
      let rightIdx = 2 * index + 2;
      let leftChild, rightChild;
      if (leftIdx < length) {
        leftChild = this.value[leftChild];
      }
    }
    return max;
  }
}
let heap = new BinaryHeap();
[1, 5, 8, 500, 60, 600, 200, 1000, 15, 20].forEach(val => heap.insert(val));
console.log(heap.value);
console.log(heap.extractMax());
console.log(heap.value);
module.exports = BinaryHeap;
