

function permute( nums){
    let result =[];
    if( nums.length == 0) return [];
    if( nums.length == 1) return [nums];

    for(let i =0; i < nums.length ; i++){
        const currNum = nums[i];
        const remainingNum = nums.slice(0 , i).concat(nums.slice(i+1));
        const remainingNumPermut = permute(remainingNum);
        for(let j =0 ; j < remainingNumPermut.length ; j++){
            const permutedArray = [currNum].concat(remainingNumPermut[j]);
            result.push([...permutedArray]);
        }

    }

    return result;
}



console.log(permute([1,1,2]));