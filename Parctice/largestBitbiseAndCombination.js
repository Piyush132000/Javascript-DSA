function largestCombination(candidates) {
    
    let maxLength =0;
   

    function dfs( arr, index, dp){

        if(index >= arr.length){

            if(dp.length ==1){
                if(dp[0]> 0)
                maxLength = Math.max(maxLength, dp.length);
            } else {
                let bitbise=dp[0];
                for(let i =1; i < dp.length; i++){
                    bitbise = bitbise & dp[i]
                }
                if(bitbise > 0){
                    maxLength = Math.max(maxLength, dp.length);
                }

            }
            return;

        }

        dp.push(arr[index]);
        dfs(arr, index+1, dp);
        dp.pop();
        dfs(arr, index +1, dp);
    
    
    };

    dfs(candidates, 0 , [])
    return maxLength;
}


console.log(largestCombination([33,93,31,99,74,37,3,4,2,94,77,10,75,54,24,95,65,100,41,82,35,65,38,49,85,72,67,21,20,31]))


function largestCombination(candidates) {
    
    let macCount = 0;

    for(let i = 0; i < 30; i++){
        let count=0
        for(let num of candidates){

            if((num & (1 << i)) !== 0){
                count++;
            }
        }

        macCount = Math.max(macCount, count);
    }
   
   }