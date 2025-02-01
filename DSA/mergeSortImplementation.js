



function mergeSort( array , left, right){

    if(left >=right){
        return;
    }

    let mid = left + parseInt((right-left)/2);
    mergeSort(array , left, mid);
    mergeSort(array, mid+1, right);

    merge(array, left , mid ,right);

    return array;
}


function merge(array , left, mid , right){


    let n1 = mid - left +1;
    let n2 =  right- mid;
    let L1 = new Array(n1);
    let L2 = new Array(n2);

    for(let i =0; i < n1;i++){
        L1[i] = array[ left+i];
    }

    for(let i =0; i < n2;i++){
        L2[i] = array[ mid+i +1];
    }

    let i =0;
    let j =0;
    let k = left;

    while( i < n1 && j < n2){

        if(L1[i] <= L2[j]){
            array[k]= L1[i];
            i++;
        } else {
            array[k]= L2[j];
            j++
        }
        k++;
    }

    while(i < n1){
        array[k]= L1[i];
        i++;
        k++;
    }

    while(j < n2){
        array[k]= L2[j];
        j++;
        k++;
    }



}


let array =[ 1,4,3,2,6,4,3,7,4,3,2];


console.log(mergeSort(array, 0, array.length-1))