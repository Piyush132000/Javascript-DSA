


function subOfSubSet(array , answer , start , sum){

    if(start == array.length){
        answer.push(sum);
        return;
    }

    sum += array[start];
    subOfSubSet(array , answer , start+1 , sum);

    sum -= array[start];
    subOfSubSet(array , answer, start+1, sum )

return answer;

}



let array = [ 3 , 1 , 0,  2];

array = array.sort(function(a,b){ return b-a});
console.log(array);

console.log(subOfSubSet(array , [] , 0 , 0));