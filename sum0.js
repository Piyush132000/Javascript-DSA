let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

function sum0(array) {
  let arrLength = array.length - 1;
  let i = 0;
  sumArray = [];
  while (i < arrLength) {
    if (array[i] + array[arrLength] == 0) {
      return [array[i], array[arrLength]];
    } else if (array[i] + array[arrLength] < 0) {
      i++;
    } else {
      arrLength--;
    }
  }
}

console.log(sum0(arr));
