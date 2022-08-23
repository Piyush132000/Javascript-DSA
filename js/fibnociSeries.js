
function fib( collect ,n) {
    
    if(n<=1){
        collect[n]=n;
        return collect[n];
    }
    if(collect[n]){
        return collect[n];
    }

    return  collect[n] =fib(n-1) + fib(n-2);
  }


function findFib(n) {
prev2 =0;
prev = 1;
for (let i=2 ; i <=n;i++){
    let cur = prev2 + prev;
    prev2 =prev;
    prev = cur;
}

return prev;
}

console.log(findFib(10));
