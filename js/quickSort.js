

function quickSort(array, low , high){
    if(low< high){
        let pi = position(array , low , high);
        quickSort(array, low , pi-1);
        quickSort(array, pi+1, high);
    }
}

function position(array , low , high){
    let pivot = array[high];
    let i = low -1;
    for(let j =low ; j <= high; j++){
        if(array[j]< pivot){
            i++
            [array[i],array[j]]=[array[j],array[i]];
        }
    }
    [array[i+1],array[high]]=[array[high],array[i+1]];
    return i+1;
}


function selectionSort1( array, length){
    let index;
    for(let  i =0; i <length-1; i++){
        index =i;
        for(let j =i+1 ; j<length; j++){
            if(array[j] < array[index])
            {
                index = j;
            }
        }
        let temp = array[index];
        array[index]= array[i];
        array[i]= temp;

    }
    return array;


}


const array = [ 3,2,4,5,6,76,78];
//console.log(quickSort(array, 0,array.length-1));
//console.log(array);


function mergeSort(array , low , high){

    if(low >=high){
        return;
    }
    let mid = low+Math.floor((high-low)/2);

    mergeSort(array,low, mid );
    mergeSort(array, mid+1, high);
    merge(array, low , mid , high);
    return array;
}

function merge(array , left, mid , right){

let n1 =   mid-left +1;
let n2 = right-mid;

let L = new Array(n1);
let R= new Array(n2);

for(let i =0; i < n1; i++){
    L[i]=array[left+i];
}

for(let j =0; j < n2; j++){
    R[j]=  array[mid+1+j];
}

let i=0,j=0;
let k =left;

while(i<n1 && j<n2){
    if(L[i]<=R[j]){
        array[k]=L[i];
        i++;
    } else {
        array[k]=R[j];
        j++
    }
    k++
}

while(i < n1){
    array[k]=L[i];
    i++;
    k++;
}
while(j<n2){
    array[k]=R[j];
    j++;
    k++;
}

}

console.log(mergeSort(array, 0, array.length-1));