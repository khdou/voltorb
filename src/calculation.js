export function solveVoltorbFlip(game) {
    console.log("Solving..");

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            game.myRowSum[i] += game.board[i][j];
            game.myColSum[j] += game.board[i][j];
        }
    }
    console.log(game);
    backtrack(game, 0, 0);

    console.log("Solved! " + game.sols.length + " total solutions found.");

    let results = [
        [0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0]
    ];

    for (let sol in game.sols) {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                results[i][j] += sol[i][j] === 100 ? 100.0 : 0.0;
            }
        }
    }
    let size = parseFloat(game.sols.length);
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            results[i][j] /= size;
            results[i][j] = Math.round(results[i][j] * 100.0) / 100.0;
        }
    }

    return results;
}

function backtrack(game, row, col) {
    if (row === 5 && col === 0) {
        game.sols.push(cloneBoard(game.board));
        print2D(game.board);
        return;
    }
    for (let i = row; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (i === row && j >= col) {
                console.log(game);
                console.log(game.board[i][j]);
                if (game.board[i][j] === 0) {
                    game.board[i][j] = 100;
                    game.myRowSum[i] += 100;
                    game.myColSum[j] += 100;
                    if (isValid(game, i, j)) {
                        if (j === 4) {
                            backtrack(game.board, i + 1, 0);
                        } else {
                            backtrack(game.board, i, j + 1);
                        }
                    }
                    game.board[i][j] = 0;
                    game.myRowSum[i] -= 100;
                    game.myColSum[j] -= 100;
                    for (let k = 3; k > 0; k--) {
                        game.board[i][j] = k;
                        game.myRowSum[i] += k;
                        game.myColSum[j] += k;
                        if (isValid(game, i, j)) {
                            if (j === 4) {
                                backtrack(game.board, i + 1, 0);
                            } else {
                                backtrack(game.board, i, j + 1);
                            }
                        }
                        game.board[i][j] = 0;
                        game.myRowSum[i] -= k;
                        game.myColSum[j] -= k;
                    }
                    return;
                }
            } else if (i > row) {
                if (game.board[i][j] === 0) {
                    game.board[i][j] = 100;
                    game.myRowSum[i] += 100;
                    game.myColSum[j] += 100;
                    if (isValid(game, i, j)) {
                        if (j === 4) {
                            backtrack(game.board, i + 1, 0);
                        } else {
                            backtrack(game.board, i, j + 1);
                        }
                    }
                    game.board[i][j] = 0;
                    game.myRowSum[i] -= 100;
                    game.myColSum[j] -= 100;
                    for (let k = 3; k > 0; k--) {
                        game.board[i][j] = k;
                        game.myRowSum[i] += k;
                        game.myColSum[j] += k;
                        if (isValid(game, i, j)) {
                            if (j === 4) {
                                backtrack(game.board, i + 1, 0);
                            } else {
                                backtrack(game.board, i, j + 1);
                            }
                        }
                        game.board[i][j] = 0;
                        game.myRowSum[i] -= k;
                        game.myColSum[j] -= k;
                    }
                    return;
                }
            }
        }
    }
    game.sols.push(cloneBoard(game.board));
    print2D(game.board);
}

function isValid(game, row, col) {
    let isRowCompleted = true;
    let isColCompleted = true;
    for (let i = 0; i < 5; i++) {
        if (game.board[row][i] === 0) {
            isRowCompleted = false;
        }
        if (game.board[i][col] === 0) {
            isColCompleted = false;
        }
    }
    if (isRowCompleted) {
        if (game.myRowSum[row] !== game.rowSum[row]) {
            return false;
        }
    } else {
        if (
            game.myRowSum[row] > game.rowSum[row] ||
            game.myRowSum[row] % 100 > game.rowSum[row] % 100
        ) {
            return false;
        }
    }
    if (isColCompleted) {
        if (game.myColSum[col] !== game.colSum[col]) {
            return false;
        }
    } else {
        if (
            game.myColSum[col] > game.colSum[col] ||
            game.myColSum[col] % 100 > game.colSum[col] % 100
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
