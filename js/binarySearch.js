

function binarySearch(arr, find){

  arr = arr.sort((a,b)=> a-b);
  console.log(arr)
  let left = 0;
  let right = arr.length -1;

  while(left <= right){

    let mid = left + Math.floor((right-left)/2);

    if( arr[mid] == find){
      return mid;
    } else if( arr[mid ] > find){

      right = mid;
      left++;

    } else {
      left= mid;
      right--
    }

  }

  return -1;

}

let array = [2,6,3,8,7,5,9,1,0].sort((a,b)=> a-b);

console.log(binarySearch(array, 5));
