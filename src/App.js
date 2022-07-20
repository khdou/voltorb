import "./styles.css";
import { solveVoltorbFlip, print2D } from "./calculation.js";
import VoltorbGrid from "./components/VoltorbGrid";
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import VoltorbBar from "./components/VoltorbBar";

export default function App() {

    const [boardValues, setBoardValues] = useState([
        [2, 0, 0, 3, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [2, 0, 0, 0, 0]
    ]);
    const [rowSum, setRowSum] = useState([100, 105, 5, 203, 204]);
    const [colSum, setColSum] = useState([7, 104, 105, 106, 302]);
    
    const [boardScores, setBoardScores] = useState(solveVoltorbFlip(boardValues, rowSum, colSum));

    const updateBoardValues = (row, col, val) => {
        let newBoard = boardValues.map(row => row.slice());
        newBoard[row][col] = parseInt(val);
        setBoardValues(newBoard);
        setBoardScores(solveVoltorbFlip(newBoard, rowSum, colSum));
    }

    const updateRow = (newRow) => {
        setRowSum(newRow);
        setBoardScores(solveVoltorbFlip(boardValues, newRow, colSum));
    }

    const updateCol = (newCol) => {
        setColSum(newCol);
        setBoardScores(solveVoltorbFlip(boardValues, rowSum, newCol));
    }

    const reset = () => {
        setBoardValues([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]);
        setRowSum([0,0,0,0,0]);
        setColSum([0,0,0,0,0]);
        setBoardScores(solveVoltorbFlip([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ], [0,0,0,0,0], [0,0,0,0,0]));
    }
    return (
        <div className="App">
            <Typography>Voltorb Solver</Typography>
            <Button variant="outlined" onClick={reset}>Reset</Button>
            <Grid item container>
                <Grid item xs={2}></Grid>
                <Grid item xs={7}>
                    <VoltorbGrid xs={12} boardValues={boardValues} boardScores={boardScores} updateBoardValues={updateBoardValues}/>
                </Grid>
                <Grid item xs={1}>
                    <VoltorbBar xs={12} isRow={true} arraySum={rowSum} updateArray={updateRow} />
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={10}>
                    <VoltorbBar xs={12} isRow={false} arraySum={colSum} updateArray ={updateCol} /> 
                </Grid>
            </Grid>
        </div>
    );
}
