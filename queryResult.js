var queryResults = function(limit, queries) {

    let colored= new Array(limit);
    let coloredLength =0;
    let result = [];

    for(let i =0; i < queries.length; i++){

        let edge = queries[i];

        if(!colored.includes(edge[1])){

            if(!colored[edge[0]]){
                colored[edge[0]]= edge[1]; 
                coloredLength++;
            } else {
                colored[edge[0]]= edge[1];
            }
            result.push(coloredLength);
        }  else {
          
            result.push(coloredLength);
        }
    }

    return result;
    
};



let limit = 4;
let queries = [[0,1],[1,2],[2,2],[3,4],[4,5]];

console.log(queryResults(limit, queries))