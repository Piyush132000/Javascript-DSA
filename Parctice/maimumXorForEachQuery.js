
function maximumXor(nums, maxbit){

    let bit = Math.pow(2, maxBit)-1;
    let arr=[];

    // for(let i = nums.length-1; i >=0; i--){
    //     let prefixXor= nums[i];
    //     for(let j =i-1; j >=0; j--){
    //         prefixXor = prefixXor ^ nums[j];
    //     }
    //     prefixXor =   prefixXor ^ bit;
    //     arr.push(prefixXor);
    // }

    let previousPrefix= nums[0] ^ bit;
    arr.push(previousPrefix);
    
    for(let i =1; i <=nums.length-1; i++){

        previousPrefix = nums[i] ^ previousPrefix

        arr.push(previousPrefix)

    }

return arr.reverse();


}


const nums = [0,1,1,3];
const maxBit = 2;


console.log(maximumXor(nums, maxBit));

"a".c