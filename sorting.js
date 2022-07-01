

let myArray = ["a", "c" , "g" , "r" , "t" , "y","b" , "o", "a"];

let i = 0;
let j = 1;

function sortCheck(arr){
    let i=0;
    for(let i=0; i< arr.length-1; i++){
        if(arr[i] > arr[i+1]) return false;
    }
    return true;
}
function sortElements(arr){

    if(sortCheck(arr)){
        return arr;
    } else
    if(arr[i] < arr[j]){
        i++;
        j++;
       return sortElements(arr);
    } else if(arr[i] > arr[j]){
        [arr[i],arr[j]]=[arr[j],arr[i]];
        i=0;
        j=1;
       return sortElements(arr);
    }
}

console.log(sortElements(myArray));