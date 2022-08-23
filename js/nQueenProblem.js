var n = 4;

class NQueen {
  queenBox = [];
  constructor(n, box) {
    this.nQueen(box, 0, n);
  }
  board(n, box) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        box[i][j];
      }
    }

    return box;
  }

  nQueen(col, n) {
    if (col > n) {
      return true;
    }

    for (let i = 0; i < n; i++) {
      if (this.isSafe(this.queenBox, i, col) === true) {
        this, (queenBox[i][col] = 1);
        if (this.nQueen(this.queenBox, col + 1)) return true;
        this.queenBox[i][col] = 0;
      }
    }

    return false;
  }

  isSafe(queenBox, row, col) {
    for (let i = 0; i < col; i++) {
      if (queenBox[row][i] == 1) return false;
    }

    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
      if (queenBox[i][j]) return false;

    for (let i = row, j = col; j >= 0 && i < n; i++, j--)
      if (queenBox[i][j]) return false;

    return true;
  }
}

let array = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const obj = new NQueen(4, array);

console.log(obj.queenBox);
