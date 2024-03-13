function selectionSort(array , length){

    let index;
    for(let i =0; i < length-1; i++){
        index= i;
        for(let j = i+1; j < length ; j++){
            if(array[j] < array[index]){
                index= j
            }
        }

            let temp = array[index];
            array[index] = array[i];
            array[i] = temp;
        
    }

    return array;
}


function mergeSort(array , left , right){

    if(left >=right){
        return;
    }
    let mid = left + parseInt((right-left)/2);
    mergeSort(array , left , mid);
    mergeSort(array , mid+1, right);
    merge(array, left , mid , right);
    return array;

}


 function merge(arr , left , mid , right ){

    let n1 = mid -left+1;
    let n2 = right-mid;

    let L= new Array(n1);
    let R = new Array(n2);
    for(let i =0; i < n1; i++){
            L[i]=arr[left+i];
    }

    for(let j = 0; j < n2 ; j++){
        R[j]=arr[mid+1+ j];
    }

    let i =0;
    let j =0;
    let k =left;

    while(i < n1 && j < n2){

        if(L[i] <= R[j]){
            arr[k]= L[i];
            i++;
        } else {
            arr[k]= R[j];
            j++
        }
        k++
    }

    while(i < n1){
        arr[k] = L[i];
        i++;
        k++;
    }

    while(j<n2){
        arr[k]= R[j];
        j++;
        k++;
    }




}


let arr  = [3,4,1,2,3,4,5,6];
//console.log(selectionSort(arr, arr.length));


//console.log(mergeSort(arr , 0 , arr.length-1))



function quickSort(array, low , high){

    if(low < high){

        let pi = position(array, low , high);
        quickSort(array, low , pi-1);
        quickSort(array, pi+1, high);
    }
}


function position(array, low, high){

    let pivot = array[high];
    let i = low -1;
    for(let j = low ; j <= high-1; j++){
        if(array[j]< pivot){
            i++;
            [array[i],array[j]]=[array[j], array[i]];
        }
    }

    [array[i+1],array[high]]=[array[high],array[i+1]];
    return i +1;


}

//quickSort(arr,0, arr.length-1);
console.log(arr);


function bubbleSort(array){

    let swapp = false;

    for(let i =0; i < array.length -1 ; i++){
        for(let j =0; j < array.length -i-1; j++){

            if(array[j] > array[j+1]){
                [array[j],array[j+1]]=[array[j+1],array[j]];
                swapp = true;
            }

        }
        if(!swapp){
            break;
        }
    }


    return array;
}


console.log(bubbleSort(arr))