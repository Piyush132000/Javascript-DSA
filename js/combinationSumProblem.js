// Problem if array [ 2 , 2 , 3 , 6 , 7] the print arrays whose sum is 7
// example [2 , 2 ,3];

var answer = new Array();

function combinationSum(array, arr, start, k , answer) {
  if (start == array.length) {
    if (k == 0) {
      answer.push([...arr]);
    }
    return;
  }

  if (array[start] <= k) {
    arr.push(array[start]);
    combinationSum(array, arr, start, k - array[start] , answer);
    arr.pop();
  }
  combinationSum(array, arr, start+1, k , answer);
}

combinationSum([2, 2, 3, 4, 5, 7], [], 0, 7, answer);
console.log(answer);
