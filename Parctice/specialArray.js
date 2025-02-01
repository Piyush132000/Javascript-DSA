function isArraySpecial(nums, queries) {

    let left =0;
    let right = queries.length-1;
    let acc=[];

    while(left <= right){

        let leftArray =   nums.slice(left[0], left[1]+1);
        let leftPrevious = leftArray[0]%2 === 0 ? 1:0;
        for(let i =1; i < arr.length; i++){
            let reminder = arr[i]%2
            if( reminder ==0 && leftPrevious == 0){
                previous= 1;
            } else if( reminder > 0 && leftPrevious ==1) {
                previous = 0;
            } else {
                return acc.concat([false])
            }
        }
        if(left+1 != acc.length){
            acc.push(true)
        }

        let rightArray =   nums.slice(right[0], right[1]+1);
        let rightPrevious = rightArray[0]%2 === 0 ? 1:0;
        for(let i =1; i < arr.length; i++){
            let reminder = arr[i]%2
            if( reminder ==0 && rightPrevious == 0){
                previous= 1;
            } else if( reminder > 0 && rightPrevious ==1) {
                previous = 0;
            } else {
                return acc.concat([false])
            }
        }
        if(right +1 != acc.length){
            acc.push(true)
        }



    }

    let result = queries.reduce(( acc, value)=>{
            let arr =   nums.slice(value[0], value[1]+1);
            let previous =arr[0]%2 === 0 ? 1:0;
            for(let i =1; i < arr.length; i++){
                let reminder = arr[i]%2
                if( reminder ==0 && previous == 0){
                    previous= 1;
                } else if( reminder > 0 && previous ==1) {
                    previous = 0;
                } else {
                    
                    return acc.concat([false])
                }
            }
            return acc.concat([true])
            },[])
    
        return result;
    
    };


    var show = 1; console.log(show); function show () { console.log(2); } console.log(show);