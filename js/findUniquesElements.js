
function findUnique(arr){

    let res = arr[0];

    for(let i=1; i < arr.length; i++)
        res = res ^ arr[i];
    
    return res;
}


const array = [2,3,3,2,4,4,5];

console.log(findUnique(array));