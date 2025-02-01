var findLengthOfShortestSubarray = function(arr) {
    let left =0;
    let right = arr.length-1;
    let count =0;
    for(let i = arr.length; i >=0; i--){
        if(arr[i] < arr[i-1]){
            right =i;
            break;
        }
        count++;
    }
    
    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            left =i;
            break;
        }
    }

    let i =0;
    let j =0;
    let dp =0;

  console.log(left , right)
    console.log(left, right, count)

    return arr.slice(left-1, right).length

    
};

console.log(findLengthOfShortestSubarray([1,2,3,10,4,2,3,5]))
