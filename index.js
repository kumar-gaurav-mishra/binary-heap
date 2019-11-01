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
}
let heap = new BinaryHeap();
[1, 5, 8, 500, 60, 600, 200, 1000, 15, 20].forEach(val => heap.insert(val));
console.log(heap);
module.exports = BinaryHeap;
