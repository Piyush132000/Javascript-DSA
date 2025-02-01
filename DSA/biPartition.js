//Bipartition is the approach where we found that every adjency node will have differnt color and their is no odd cycle.



const nodes = [[1,2],[2,4],[1,5],[4,5],[2,3]]

function bfs( nodes){
    let n = nodes.length;

    let adj = new Array(n+2).fill(null).map(()=>[]);
   

    for(let i =0; i < n ; i++){
        adj[nodes[i][0]].push(nodes[i][1]);
        adj[nodes[i][1]].push(nodes[i][0])
    }
    console.log(adj)
    let colors= new Array(n+1).fill(-1)

    for(let i =1; i < n+1; i++){
        if(colors[i]=== -1){
            if( !isBiparted(adj, n, i, colors)){
                    return false;
            }
        }
    }

    return true;


}


function isBiparted(adj , n , node, color){

    let que = [];
    que.push(node);
    color[node] = 1;
    while(que.length !=0){

         let current = que.shift();
        
         for(let adjEl  of adj[current]){

            if(color[adjEl] == color[current]){
                return false;
            } else if( color[adjEl] == -1){
                color[adjEl]= 1- color[current];
                que.push(adjEl);
            }

         }
    }

    return true;

}



console.log(bfs(nodes))