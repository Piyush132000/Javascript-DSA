function hasArrayTwoCandidates(arr,n,x){
        
    let i =0;
    n= n-1;
    arr = arr.sort(function(a,b){ return a-b});
    while(i<n){
        if(arr[i] +arr[n] == x){
            return true;
        } else if(arr[i] + arr[n] > x){
            n--;
        } else if(arr[i] + arr[n] < x){
            i++;
        }
        if( i == n){
            return false
        }
        
    }
    return false;
    
}


console.log(hasArrayTwoCandidates([1,2,5,6,7], 5,4));