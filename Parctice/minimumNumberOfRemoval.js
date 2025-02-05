function minimumRemove(nums) {

  let left  =0;
  let right = nums.length -1;
  let mid =   left + Math.floor((right-left)/2);
  let operations= 0;
  let array = [ ...nums]

  while(left < mid ){
      if( nums[left] >= nums[left+1]){
              operations++;
              array.splice(left, 1)
               mid =   left + Math.floor((right-left)/2);
              console.log(array)
             if (array.length ==0){
              break;
             }
             
             
      } else {
        console.log()
      left++
      }

  }
  right = array.length-1;
  console.log(array)

   while(right > mid+1 ){
      console.log(nums[right], nums[right-1])
      if( nums[right] >= nums[right-1]){
              operations++;
              array.splice(left, 1)
              mid =   left + Math.floor((right-left)/2);
            
             
      }  else{
      right--;
      }
      

  }



return nums.length -array.length


}


console.log(minimumRemove([4,3,2,1,1,2,3,1]))



function trap(height) {

  let left =0;
  let right = height.length-1;
  let maxWater =0;


  let leftMax = height[left];
  let rightMax = height[right];

  while(left < right){

      if(leftMax < rightMax){

        left++;
        leftMax =  Math.max(leftMax , height[left])
        maxWater+= leftMax - height[left]
      } else {

        right--;
        rightMax =  Math.max(rightMax , height[right]);
        maxWater += rightMax -height[right];
      }
    }



  return maxWater
  
};

console.log(trap([4,2,0,3,2,5]))