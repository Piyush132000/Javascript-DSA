function minEnd(n, x) {

    
    let i =x;
    let preAnd = x;
    let count=0;
    let j =0
   let interval = setInterval(()=>{
        j = j+100
   }, 100)
    while(count != n ){
        let value =  i & x
        if( value == x && (preAnd & x) ){
            preAnd =i;
            count++;
        }
        i++
    }
    clearInterval(interval)
    console.log(j)
    return preAnd;
    
};

console.log(minEnd(6715154,7193485))


Number.MIN_SAFE_INTEGER