

function generateParentheses(n) {
    let res = []
    function dfs(open , close, s){


        if(open === close && open + close === n*2){
            res= [...res, s+""];
            return;
        }
    
        if( open < n)
            dfs(open+1, close,  s+"(");
    
        if(close < open){
            dfs(open,close+1, s+")",);
        }
    
    
    }
    dfs(0, 0, "")
    return res;
}





console.log(generateParentheses(3))




var combinationSum = function(candidates, target) {

    return sum(0 , candidates, target , [] , []);

    
};


console.log(combinationSum([2,3,5], 10));

function sum(index , candidates , target , arr, result){

    if(index == candidates.length){
        if( target == 0){
            result.push([...arr])
        }
        return
    }


    if(candidates[index] <= target){
    arr.push(candidates[index]);
    sum(index , candidates , target-candidates[index], arr , result );
    arr.pop();
    }

    sum(index+1, candidates , target , arr , result);

    return result;

}