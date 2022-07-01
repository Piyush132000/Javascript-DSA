
function sumOfSubsequencesK(array, arr, start, end , k , sum){

   
    if(start == end){
        if( sum > k) return;
        if(k ==sum){
            console.log(arr);
        } 
        return;
    }
  

    arr.push(array[start]);
    sum += array[start];
    sumOfSubsequencesK(array, arr ,start+1,end, k , sum);
    arr.pop();
    sum -= array[start];
    sumOfSubsequencesK(array,arr, start+1, end, k, sum);


}

sumOfSubsequencesK([1 , 1 , 2, -2], [] , 0 , 4 , 2, 0);