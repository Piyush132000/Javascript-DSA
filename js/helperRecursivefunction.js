


function findOdd(arr){
    let result =[];
    function helperResursive(params){
        if(params.length ===0){
            return
        } else if( params[0] % 2 !==0){

            result.push(params[0]);
        }
        helperResursive(params.slice(1))
    }
    helperResursive(arr);

    return result
}

console.log(findOdd([
    1, 1, 2, 2, 3, 10, 10, 6, 7, 4, 3, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6, 7, 7, 8, 8,
    9, 9,
  ]))