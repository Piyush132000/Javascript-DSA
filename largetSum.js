var twoSum = function(nums, target) {
   
    answer = []
    let i =0;
    let n = nums.length-1;
   
    console.log(mid);
    if( nums[mid] < target){
        for(let k =0; k <= mid;k++ ){
            
            for(let j =0; j <=mid; j++){
                console.log( nums[j] + nums[k])
                if( nums[j] + nums[k] == target){
                   return [k,j];
                }
            }
            
        }
    
    } else {
        for(let k =mid; k <= n;k++ ){
            
            for(let j =mid; j <=n; j++){
                console.log( nums[j] + nums[k])
                if( nums[j] +nums[k] == target){
                   return [k,j];
                }
            }
            
        }
    }
        
       
    return answer;
    
    
};



console.log(twoSum([2,7, 11 ,15],9) )