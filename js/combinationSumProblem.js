// Problem if array [ 2 , 2 , 3 , 6 , 7] the print arrays whose sum is 7
// example [2 , 2 ,3];

var answer = new Array();

function combinationSum(array, ds, start, sum , answer) {

  if( start == array.length ){

    if(sum == 0){
      answer.push([...ds])
    }
   return;
  }

  if(array[start] <= sum){
    ds.push(array[start]);
    combinationSum(array, ds, start+1, sum-array[start], answer);
    ds.pop()
  }
  combinationSum(array, ds, start+1, sum , answer )

 
}

combinationSum([2, 2, 3, 4, 5, 7], [], 0, 7, answer);
console.log(answer);
