function nQueenProblem(n) {
  let list = [];

  let board = new Array(n)
    .fill(() => _)
    .map(() => new Array(n).fill(() => _).map(() => 0));

  function isSafe(row, col) {
    let dupCol = col;
    let dupRow = row;

    while (dupCol >= 0) {
      if (board[dupRow][dupCol] == "Q") return false;
      dupCol--;
    }


    dupCol = col;
    dupRow = row;
    while (dupCol >= 0 && dupRow >= 0) {
      if (board[dupRow][dupCol] == "Q") return false;
      dupCol--;
      dupRow--;
    }

    dupCol = col;
    dupRow = row;
    while (dupCol >= 0 && dupRow < n) {
      if (board[dupRow][dupCol] == "Q") return false;
      dupCol--;
      dupRow++;
    }

    return true;
  }

  function setBoard(row, col) {
    if (col == n) {
      list.push(structuredClone(board));
      return;
    }

    for (let row = 0; row < n; row++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q";
        setBoard(row, col +1);
        board[row][col] = 0;
      }
    }
  }

  setBoard(0, 0);
  console.log(list);
}

nQueenProblem(4);
