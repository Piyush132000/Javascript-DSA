




 function  findSubSetEqualSum( array, index , sum){
    if(sum == 0){
        return true
    }
    if(index > array.length){
        return false;
    }
    console.log(sum, array[index])
    if(sum >= array[index]){
     return findSubSetEqualSum(array , index+1, sum-array[index] )
    }
    return findSubSetEqualSum(array , index+1 , sum);

}

let array = [ 3,2,1,];

//console.log(findSubSetEqualSum(array, 0, 6))


function printSubsquence( array , index , dp, list){

    if(index >= array.length){
       list.push([...dp]);
        return;
    }

    dp.push(array[index]);
    printSubsquence(array, index+1, dp,list);
    dp.pop();
    printSubsquence(array, index+1, dp, list);
    return list ;
}

 console.log(printSubsquence(array, 0, [],[]))

 let mp={}

 function findMaxSumOfSubArray(array, index, sum, dp){

    if(index >=array.length){
        mp[sum]= [...dp];
        return sum;
    }
    dp.push(array[index])
    let minSum = findMaxSumOfSubArray(array, index+1, sum+array[index], dp);
    dp.pop()
    let maxSum = findMaxSumOfSubArray(array, index+1, sum, dp);

    return  Math.max(minSum , maxSum)
 }

 //console.log(mp[findMaxSumOfSubArray(array , 0 , 0, [])])
 
let k =0

 function counSubSetWithSumK(array, index , sum, dp, list){
    if(index>=array.length && sum > 0 || sum < 0){
        return;
    }
    if(sum == 0){
        list.push([...dp])
        k++;
        return;
    }
    dp.push(array[index]);
    counSubSetWithSumK(array, index+1, sum-array[index], dp ,list);
    dp.pop();
    counSubSetWithSumK(array, index+1, sum, dp, list);
    return list;
 }

 let arr = [2,3,1,4,5,6,7,8]
 //console.log(counSubSetWithSumK(arr, 0 , 10, [], []), k)






function findMaxLengthOfSubString(string){

    let map ={};
    let maxLength = 0;
    let start = -1;
    for(let i = 0; i < string.length ; i++){
        if(map[string[i]] > start){
            start = map[string[i]];
        }

        map[string[i]]= i;
        maxLength = Math.max(maxLength,i-start )
    }
    return maxLength

}

 console.log(findMaxLengthOfSubString("ababcda"))



 class Program {
    add(a, b){
        return a+b
    }
    add(a, b, c){
        return a+b+c;
    }
 }


 class B extends Program{
    add(string){
        return string.split("").reverse().join("");
    }
 }

 const ab = new B();
 
 console.log(ab.add("string"));



 function reverse(string, length){

    if(length < 1 ){
        return;
    }
    if(length == 1){
        return string[0];
    }

    return string[length-1]+ reverse(string, length-1);

 }

 //console.log(reverse("string", 6));


 let str = "string";
 let reverseString="";

 for(let i =str.length-1 ; i >= 0; i--){
        reverseString =reverseString+ str[i];
 }
console.log(reverseString);


class Practice{

   static  fibonacci(num){
        if(num==1){
            return 0;
        }

        if(num ==2){
            return 1;

        }

        return this.fibonacci(num-1) + this.fibonacci(num-2);
    }

    static itrativeFibonacci(n){
        let num =0;
        let num2= 1;
        let sum = num + num2;
        for(let i =2; i < n ; i++){
            sum= num + num2;
            num = num2;
            num2=sum;
             
        }
        return sum;
    }

    // static seletionSort(array, length){
    //     let index;
    //     for(let i =0; i < length-1; i++){
    //         index = i;
    //         for(let j =i+1; j < length; j++){
    //             if(array[j] < array[index]){
    //                 index =j
    //             }
    //             let temp = array[index];
    //             array[index]= array[i];
    //             array[i]= temp;

    //         }
    //     }
    //     return array;
    // }

   static selectionSort(array , length){

        let index;
        for(let i =0; i < length-1; i++){
            index= i;
            for(let j = i+1; j < length ; j++){
                if(array[j] < array[index]){
                    index= j
                }
            }
    
                let temp = array[index];
                array[index] = array[i];
                array[i] = temp;
            
        }
    
        return array;
    }

    static binarySearch(array, find){
        let left =0;
        let  right = array.length;

        if(arr[right-1] < find){
            return -1
        }

        let mid;

        while(left <= right){

            mid = left + Math.floor((right-left)/2);
            if(arr[mid]== find){
                return mid;
            }

            if(arr[mid] > find){
                right = mid-1;
            } else {
                left = mid+1;
            }


        }

        return -1;
    }


    static quickSort(array , low, high){

        if( low < high){

            let pi = this.position(array, low , high);
            this.quickSort(array, low , pi-1);
            this.quickSort(array, pi+1, high);
            
        }
    }

    static position(array, low , high){

        let pivot = array[high];
        let i = low -1;

        for(let j =low; j <=high-1; j++){
            if(array[j]< pivot){
                i++;
                [array[i],array[j]]=[array[j],array[i]];
            }
        }

        [array[i+1],array[high]]= [array[high], array[i+1]];
        return i+1;

    }

    

}

// console.log(Practice.itrativeFibonacci(5));


// console.log(Practice.selectionSort([3,4,1,2,3,4,5,6],[3,4,1,2,3,4,5,6].length))
// let array = [1,8,2,3,4,5,6,7,8];
// Practice.quickSort( array, 0, array.length-1)

// console.log(array, "sorted");
