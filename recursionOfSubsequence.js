

array = [3 , 2 , 1];
n =array.length;

function reursionOfSubsequence( start ,arr, array , end ){
    if( start == end){
        console.log(arr);
        return;
    }
    arr.push(array[start]);
    reursionOfSubsequence(start+1 ,arr, array , end);
    arr.pop();
    reursionOfSubsequence(start+1 ,arr, array , end);

}


console.log( reursionOfSubsequence(0 ,[], array , n))