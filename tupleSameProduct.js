

function tupleSameProduct(nums){

    let list = [];

    recurseTuple(nums, 0, [], list);
    return list;




}



function recurseTuple(nums, index , ds, list){

    if(ds.length == 4 ){
       console.log(isValid(ds), ds)
        if((ds[0] != ds[1]) && (ds[1] != ds[2]) && (ds[2] != ds[3]) && (ds[0]*ds[1] == ds[2]*ds[3])){
            console.log(ds);
            list.push([...ds])
        }
        return
    }

    for(let i =index; i < nums.length; i++){
      
            console.log(nums[i], ds);
            ds.push(nums[i]);
            recurseTuple(nums, i, ds, list);
            ds.pop();
    }


}

function isValid(ds){
    
    for(let i =1;i < ds.length; i++ ){
        console.log(ds[i], ds[i-1])
        if(ds[i] == ds[i-1] ){
            return false;
        }
    }
    return true;
}



let nums = [2,3,4,6];

console.log(tupleSameProduct(nums))