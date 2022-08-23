

var candidates = [ 1,1,, 3 ,4 ,1, 2, 2 ];
var List = new Array();
candidates =candidates.sort(function(a,b){ return a-b});


function combinationSum( index ,array ,target , answer , ds){
    
    if(target == 0 ){
        answer.push([...ds])
        return;
    }
    for(let i = index ; i < array.length; i++ ){
        if( i > index && array[i] == array[i-1]) continue;

        if(array[i] >target) break;

        ds.push(array[i]);
        combinationSum(i+1 ,array , target- array[i], answer , ds );
        ds.pop()
    }

}

combinationSum( 0 , candidates  , 4 , List , new Array())

console.log(List);
