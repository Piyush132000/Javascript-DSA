

const arr = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]];


function finMaxFishs(arr){

    let visisted =  Array.from(arr).map(()=> Array.from(arr[0]).fill(false));
  
   

    let maxFishCount =0;
    for(let i =0; i < arr.length; i++){
        for(let j =0; j < arr[0].length; j++){

            if(arr[i][j] > 0 && !visisted[i][j]){
                maxFishCount = Math.max( maxFishCount, countFishes(arr, visisted, i, j))
            }
        }

    }
  

    return maxFishCount;

}


function countFishes( grid,visited, row, col, ){

    if(col < 0 || row < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] == 0 || visited[row][col]){
        return 0
    }

    visited[row][col]=true;

    return grid[row][col] + countFishes(grid, visited, row+1, col) + 
                            countFishes(grid, visited, row, col+1) + 
                            countFishes(grid, visited, row, col-1) + 
                            countFishes(grid, visited, row-1, col)

}


console.log(finMaxFishs(arr))