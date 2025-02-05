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
     
      answer.push([...array]);
      return;
    }

    for (let i = index; i < array.length; i++) {
      if(i > index && array[i]===array[i-1]) continue;
      [array[i], array[index]]=[array[index],array[i]]
      this.permute(array, index + 1, answer);
      [array[i], array[index]]=[array[index],array[i]]
    }
  }

  swap(i, index) {
    let t = this.array[i];
    this.array[i] = this.array[index];
    this.array[index] = t;
  }
}

let answer = new Array();
const obj = new Solution([3,3,0,3], 0, answer);

console.log(answer);
