export function solveVoltorbFlip(board, rowSum, colSum, sols) {
  console.log("Solving..");

  let myRowSum = [0, 0, 0, 0, 0];
  let myColSum = [0, 0, 0, 0, 0];

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      myRowSum[i] += board[i][j];
      myColSum[j] += board[i][j];
    }
  }
  backtrack(board, 0, 0, sols, myRowSum, myColSum, rowSum, colSum);
  let results = [
    [0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.0]
  ];
  for (let sol in sols) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        results[i][j] += sol[i][j] === 100 ? 100.0 : 0.0;
      }
    }
  }
  let size = parseFloat(sols.length);
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      results[i][j] /= size;
      results[i][j] = Math.round(results[i][j] * 100.0) / 100.0;
    }
  }
  return results;
}

function backtrack(board, row, col, sols, myRowSum, myColSum, rowSum, colSum) {
  if (row === 5 && col === 0) {
    sols.push(cloneBoard(board));
    print2D(board);
    return;
  }

  for (let i = row; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (i === row && j >= col) {
        if (board[i][j] === 0) {
          board[i][j] = 100;
          myRowSum[i] += 100;
          myColSum[j] += 100;
          if (isValid(board, i, j, myRowSum, myColSum, rowSum, colSum)) {
            if (j === 4) {
              backtrack(board, i + 1, 0);
            } else {
              backtrack(board, i, j + 1);
            }
          }
          board[i][j] = 0;
          myRowSum[i] -= 100;
          myColSum[j] -= 100;
          for (let k = 3; k > 0; k--) {
            board[i][j] = k;
            myRowSum[i] += k;
            myColSum[j] += k;
            if (isValid(board, i, j, myRowSum, myColSum, rowSum, colSum)) {
              if (j === 4) {
                backtrack(board, i + 1, 0);
              } else {
                backtrack(board, i, j + 1);
              }
            }
            board[i][j] = 0;
            myRowSum[i] -= k;
            myColSum[j] -= k;
          }
          return;
        }
      } else if (i > row) {
        if (board[i][j] === 0) {
          board[i][j] = 100;
          myRowSum[i] += 100;
          myColSum[j] += 100;
          if (isValid(board, i, j, myRowSum, myColSum, rowSum, colSum)) {
            if (j === 4) {
              backtrack(board, i + 1, 0);
            } else {
              backtrack(board, i, j + 1);
            }
          }
          board[i][j] = 0;
          myRowSum[i] -= 100;
          myColSum[j] -= 100;
          for (let k = 3; k > 0; k--) {
            board[i][j] = k;
            myRowSum[i] += k;
            myColSum[j] += k;
            if (isValid(board, i, j, myRowSum, myColSum, rowSum, colSum)) {
              if (j === 4) {
                backtrack(board, i + 1, 0);
              } else {
                backtrack(board, i, j + 1);
              }
            }
            board[i][j] = 0;
            myRowSum[i] -= k;
            myColSum[j] -= k;
          }
          return;
        }
      }
    }
  }
  sols.add(cloneBoard(board));
  print2D(board);
}

function isValid(board, row, col, myRowSum, myColSum, rowSum, colSum) {
  let isRowCompleted = true;
  let isColCompleted = true;
  for (let i = 0; i < 5; i++) {
    if (board[row][i] === 0) {
      isRowCompleted = false;
    }
    if (board[i][col] === 0) {
      isColCompleted = false;
    }
  }
  if (isRowCompleted) {
    if (myRowSum[row] !== rowSum[row]) {
      return false;
    }
  } else {
    if (
      myRowSum[row] > rowSum[row] ||
      myRowSum[row] % 100 > rowSum[row] % 100
    ) {
      return false;
    }
  }
  if (isColCompleted) {
    if (myColSum[col] !== colSum[col]) {
      return false;
    }
  } else {
    if (
      myColSum[col] > colSum[col] ||
      myColSum[col] % 100 > colSum[col] % 100
    ) {
      return false;
    }
  }
  return true;
}

function cloneBoard(board) {
  let newBoard = [];
  for (let i = 0; i < 5; i++) {
    newBoard.push(board[i].slice(0));
  }
  return newBoard;
}

function print2D(arr) {
  console.log(arr[0]);
  console.log(arr[1]);
  console.log(arr[2]);
  console.log(arr[3]);
  console.log(arr[4]);
  console.log("----------------");
}
