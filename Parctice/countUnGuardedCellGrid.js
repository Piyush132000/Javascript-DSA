function countUnguarded(m , n, guards, walls){

    let grid = Array(m).fill(0).map(()=>  Array(n).fill(0));
   
    for(let i =0; i < guards.length; i++){
        grid[guards[i][0]][guards[i][1]]= 'G'
    }

     
    for(let i =0; i < walls.length; i++){
        grid[walls[i][0]][walls[i][1]]= 'W'
    }

   for( let guard of guards){
        dfs( guard[0]-1, guard[1], grid ,'U');
        dfs(guard[0]+1, guard[1], grid, "D");
         dfs(guard[0] , guard[1]-1, grid , 'L' );
         dfs(guard[0] , guard[1]+1, grid , 'R');  
    }

    let count =0;
    for(let row of grid){
        for(let cell of row){
            if(cell ==0) count++;
        }

    }
   
    return count;
    
}

function dfs( row, cell, grid, direction){

    if( row < 0 || row >=grid.length || cell < 0 || cell >= grid[0].length || grid[row][cell] == 'G' || grid[row][cell]== 'W'){
        return ;
    }
    grid[row][cell]=1;
    if(direction == "U") dfs( row-1, cell, grid ,'U');
    if(direction == 'D') dfs(row+1, cell, grid, "D");
    if(direction == 'L') dfs(row , cell-1, grid , 'L' );
    if(direction =='R') dfs(row , cell+1, grid , 'R'); 

}

console.log(countUnguarded(4, 6, [[0,0],[1,1],[2,3]],[[0,1],[2,2],[1,4]]))
