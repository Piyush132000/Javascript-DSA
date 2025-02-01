

const arr = [ 1,2,3];

function permutation(arr){

    let list = new Array();
    function permuter( arr, index, list){

        if(arr.length == index){
            list.push([...arr]);
            return;
        }

        for(let i = index; i < arr.length; i ++){
            if( i > index && arr[i]== arr[i-1]) continue;
            [arr[i],arr[index]]= [ arr[index], arr[i]]; // swappig list to we can cretae new array 
            permuter(arr, index+1, list);
            [arr[index],arr[i]]= [ arr[i], arr[index]];
        }
    }
    permuter(arr, 0, list)
    console.log(list)

}


permutation(arr)