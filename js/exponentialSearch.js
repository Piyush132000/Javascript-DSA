


function binarySearch(array , start , end , x){
    while( start <= end){
        let mid = start+ Math.floor((end -start)/2);

        if( array[mid] == x){
            return mid;
        }
        if(array[mid] < x){
            start = mid+1;
            end;
        } 

        if( array[mid] > x){
            end = mid-1;
            start;
        }

     
    }

    return -1;
}


function exponentialSearch( array , x){

    if(array[0]==x){
        return 0;
    }
    let i=1;
    while(i < array.length && array[i] <=x ){
        i = i*2;
    }

    return binarySearch(array , i/2 , Math.min(i ,array.length-1 ), 5);

}


console.log(exponentialSearch([1,2,3,4,5,6,7,8,9], 5))