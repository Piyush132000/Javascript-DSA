class Solution {
  array = [];
  index = 0;

  constructor(array, index, answer) {
    this.array = array;
    this.index = index;
    this.permute(this.array, this.index, answer);
  }

  permute(array, index, answer) {
    if (array.length === index) {
      let ds = new Array();
      for (let i = 0; i < array.length; i++) {
        ds.push(array[i]);
      }
      answer.push(ds);
      return;
    }

    for (let i = index; i < array.length; i++) {
      this.swap(i, index);
      this.permute(array, index + 1, answer);
      this.swap(i, index);
    }
  }

  swap(i, index) {
    let t = this.array[i];
    this.array[i] = this.array[index];
    this.array[index] = t;
  }
}

let answer = new Array();
const obj = new Solution([1, 2, 3], 0, answer);

console.log(answer);
