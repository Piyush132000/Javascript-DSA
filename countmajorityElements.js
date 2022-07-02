


function findMaxOccurElements(arr){

    let i =0;
    let n = arr.length -1;
    let m = {}

    while(i <= n){
        m[arr[i]] = (m[arr[i]] || 0)+1; 
        m[arr[n]]=  (m[arr[n]] || 0) +1;
        i++;
        n--;
        if(i == n){
            m[arr[i]] = (m[arr[i]] || 0) +1;
            break
        }
    }

    console.log(m);


}

console.log(findMaxOccurElements( [ 2, 3, 2, 5, 5, 3, 4 ]))