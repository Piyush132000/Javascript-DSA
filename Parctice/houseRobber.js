
var arr = [1, 2, 3];

var rob = function(nums) {

   let dp = Array(nums.length).fill(0);
   for(let i =nums.length-1;i >=0; i-- ){
    dp[i]= Math.max(dp[i])
   }
    
 
 
 }
console.log(rob([6,3,10,8,2,10,3,5,10,5,3]));


//console.log(houseRobber([1]))


max = Number.MIN_SAFE_INTEGER