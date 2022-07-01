

let array = [];

for(let i =10000 ; i> 0; i--){
    array.push(i);
}

function bubbleSort( array , n){
    for( let i = 0; i < n ; i ++){

        let swapper = false;
        for( let j =0; j <n ; j++){
            if( array[j] > array[j+1]){
                [array[j], array[j+1]] = [ array[j+1], array[j]];
                swapper = true;
            }
        }

        if( !swapper){
            break
        }
    }

    return array;
}




console.log(bubbleSort(array, array.length))




