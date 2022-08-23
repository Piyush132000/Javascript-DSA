


class MinimumLengthSubArray {
    
    
    minLengthSubArray( arr  , answer , ds , start , end, sum){

        if( start === end  && sum >= 0){
            return;
        }
  
        if(sum < 0){
            answer.push([...ds]);
            return;
        }
        ds.push(arr[start]);
        this.minLengthSubArray(arr , answer , ds , start+1, end , sum - arr[start]);
        ds.pop();
        this.minLengthSubArray(arr , answer , ds , start+1, end , sum);
        return list;
    }
}


let list = new Array();
const minimumLength = new MinimumLengthSubArray();
const array = [1, 4, 45, 6, 0, 19]
console.log(minimumLength.minLengthSubArray(array,list, new Array(), 0 , array.length, 51))
 