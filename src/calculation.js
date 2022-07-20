export function solveVoltorbFlip(board, rowSum, colSum) {
    console.log("Solving..");
    const myRowSum = [0, 0, 0, 0, 0];
    const myColSum =  [0, 0, 0, 0, 0];
    const sols = [];
    
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            myRowSum[i] += board[i][j];
            myColSum[j] += board[i][j];
        }
    }

    backtrack(board, rowSum, colSum, myRowSum, myColSum, sols, 0, 0);

    console.log("Solved! " + sols.length + " total solutions found.");
    console.log("RowSum = " + rowSum);
    console.log("ColSum = " + colSum);
    
    let results = [
        [0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0]
    ];

    sols.forEach( sol => 
        {for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                results[i][j] += sol[i][j] === 100 ? 100.0 : 0.0;
            }
        }});
        
    
    let size = parseFloat(sols.length);
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            results[i][j] /= size;
            results[i][j] = Math.round(results[i][j] * 100.0) / 100.0;
        }
    }

    return results;
}

function backtrack(board, rowSum, colSum, myRowSum, myColSum, sols, row, col) {
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
                    if (isValid(board, rowSum, colSum, myRowSum, myColSum, i, j)) {
                        if (j === 4) {
                            backtrack(board, rowSum, colSum, myRowSum, myColSum, sols, i + 1, 0);
                        } else {
                            backtrack(board, rowSum, colSum, myRowSum, myColSum, sols, i, j + 1);
                        }
                    }
                    board[i][j] = 0;
                    myRowSum[i] -= 100;
                    myColSum[j] -= 100;
                    for (let k = 3; k > 0; k--) {
                        board[i][j] = k;
                        myRowSum[i] += k;
                        myColSum[j] += k;
                        if (isValid(board, rowSum, colSum, myRowSum, myColSum, i, j)) {
                            if (j === 4) {
                                backtrack(board, rowSum, colSum, myRowSum, myColSum, sols, i + 1, 0);
                            } else {
                                backtrack(board, rowSum, colSum, myRowSum, myColSum, sols, i, j + 1);
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
                    if (isValid(board, rowSum, colSum, myRowSum, myColSum, i, j)) {
                        if (j === 4) {
                            backtrack(board, rowSum, colSum, myRowSum, myColSum, sols, i + 1, 0);
                        } else {
                            backtrack(board, rowSum, colSum, myRowSum, myColSum, sols, i, j + 1);
                        }
                    }
                    board[i][j] = 0;
                    myRowSum[i] -= 100;
                    myColSum[j] -= 100;
                    for (let k = 3; k > 0; k--) {
                        board[i][j] = k;
                        myRowSum[i] += k;
                        myColSum[j] += k;
                        if (isValid(board, rowSum, colSum, myRowSum, myColSum, i, j)) {
                            if (j === 4) {
                                backtrack(board, rowSum, colSum, myRowSum, myColSum, sols, i + 1, 0);
                            } else {
                                backtrack(board, rowSum, colSum, myRowSum, myColSum, sols, i, j + 1);
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
    sols.push(cloneBoard(board));
    print2D(board);
}

function isValid(board, rowSum, colSum, myRowSum, myColSum, row, col) {
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

export function print2D(arr) {
    console.log(
        arr[0] + "\n" + arr[1] + "\n" + arr[2] + "\n" + arr[3] + "\n" + arr[4]
    );
}
