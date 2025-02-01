

let height = [0,1,0,2,1,0,1,3,2,1,2,1];


function rainTrapping( height){

    let n = height.length;
    let maxWater = 0;

    for(let i = 0; i < height.length; i++){

        let leftMax=0;
        let rightMax =0;

        for(let j =0; j <=i; j++){
            leftMax = Math.max(leftMax, height[j])
        }

        for( let j = i ; j < n; j++){
            rightMax = Math.max(rightMax, height[j])
        }

         maxWater += Math.min(rightMax, leftMax) - height[i];

    }

    return maxWater;
}

console.log(rainTrapping(height));



//Time Optimization


function rainTrapTimeOptimize(height){

    let n = height.length;

    let leftMax= new Array(n).fill(0);
    let rightMax = new Array(n).fill(0);

    leftMax[0]= height[0];
    for(let i =1; i < n; i++){
        leftMax[i] = Math.max(leftMax[i-1], height[i]);
    }

    rightMax[n-1] = height[n-1];
    for(let i =n-2; i >=0; i--){
        rightMax[i] = Math.max(rightMax[i+1], height[i]);
    }

    let water= 0;

    for(let i =0; i< n; i++){
        water += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return water;


}


console.log(rainTrapTimeOptimize(height))



//Space and time both optimization 




function opRainTrap( height){
    let right = height.length-1;
    let left = 0;

    let leftMax = height[left];
    let rightMax = height[right];
    let water =0;

    while(left < right){

        if( leftMax < rightMax){
            left++;
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
        } else {

            right--;
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right]
        }
    }

    return water;

}

console.log(opRainTrap(height))