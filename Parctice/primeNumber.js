function  isPrime(n){

    for(let i =2 ; i < Math.sqrt(n) ; i++){
        if(n %  i==0){
            return false;
        }
    }
 return true;
}



let nums = [4,9,6,10];

function primeSubOpeartion(nums){

    
    for(let i =0; i <nums.length; i++ ){

        let diff ;

        if(i ==0){
            diff = nums[i];
        } else {
            diff = nums[i]- nums[i-1];
        }

        let prime;

        for(let j = diff-1; j >=2 ; j--){
            if( isPrime(j)){
                prime = j;
            }
        }

        nums[i]= nums[i]-prime;

    }

    return true;
}


console.log(primeSubOpeartion(nums))