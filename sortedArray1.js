

function findSum(n){
    if( n==0){
        return 0;
    }
    return n+ findSum(n-1);

}

function factorial(n){
    let sum =0
   for(let i =0; i<=n ; i++){
    sum += i;
   }
   return sum
}


console.log(findSum(170));

console.log(factorial(170));