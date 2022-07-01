function getResult(nums){
    let arr = nums.sort(function(a,b){ return a-b});
    var array =[];
    let answer= [];
    for( let i =0;i <arr.length ; i++){
        if(array.includes(arr[i])){
            answer.push(arr[i]);
        } else{
            array.push(arr[i]);
        }
    }

    if(answer.length !=0){
        answer.push(arr[arr.length-1]+1);
    }

    return [...answer];

}

console.log(getResult([1, 1 ,2]));