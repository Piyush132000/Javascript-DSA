


function solveQueen(n){

    let solution = [];
    let board = new Array(n).fill(()=> -1)

    for(let i =0; i < n; i++){
        board[i]= new Array(n)
    }
     
    console.log(board)

    function isSafe(  row , col){

        for(let prevRow =0; prevRow < row; prevRow++){
                let prevCol = board[prevRow];

                if(prevCol){}
        }
        
    }



    function solve( col, board, solution, n){

        if( col == n){
            solution.push([...board]);
            return;
        }

        for(let row = 0 ; row < n; row++  ){

            if(isSafe(row, col)){
                board[row][col] = 'Q'
                solve( col+1, board, solution, n);
                board[row][col]= ".";
            }
        }
    }

    solve(0, board , solution, n)
}


solveQueen(4)