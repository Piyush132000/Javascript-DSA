


function maxAscendingSum(nums) {

    let maxSum  =nums[0];
    let left = nums[0];
    let sum =maxSum;
    for(let i =1; i < nums.length; i++){

        if(left < nums[i]){
            sum += nums[i];
            left = nums[i]
        } else {
           left = nums[i];
           sum = nums[i];

        }

        maxSum = Math.max(maxSum, sum)
    }

    return maxSum;
    
};