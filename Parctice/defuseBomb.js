

function defuseBomb( code , k){

    let arr =[];
   
    for(let i =0; i < code.length; i++){
        const sum = code.slice(1, k+1).reduce((sum, currentVlaue)=>{
           return sum += currentVlaue;
        },0)
        arr.push(sum)
        const start = code.shift();
        code.push(start);   
    }
    return arr;
}

console.log(defuseBomb([5,7,1,4],3))