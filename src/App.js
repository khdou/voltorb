import "./styles.css";
import { solveVoltorbFlip, print2D } from "./calculation.js";
import VoltorbGrid from "./components/VoltorbGrid";
import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import VoltorbBar from "./components/VoltorbBar";

export default function App() {
    const [boardValues, setBoardValues] = useState([
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]);

    const [rowSum, setRowSum] = useState([0, 0, 0, 0, 0]);
    const [colSum, setColSum] = useState([0, 0, 0, 0, 0]);
    
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
        setRowSum([303,303,303,303,303]);
        setColSum([303,303,303,303,303]);
        setBoardScores(solveVoltorbFlip([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ], [303,303,303,303,303], [303,303,303,303,303]));
    }

    const resetBoardOnly = () => {
        setBoardValues([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]);
        setBoardScores(solveVoltorbFlip([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ], rowSum, colSum));
    }


    const demo = () => {
        setBoardValues([
            [2, 0, 0, 3, 0],
            [1, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0],
            [2, 0, 0, 0, 0]
        ]);
        setRowSum([107, 105, 5, 203, 204]);
        setColSum([7, 104, 105, 106, 302]);
        setBoardScores(solveVoltorbFlip([
            [2, 0, 0, 3, 0],
            [1, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0],
            [2, 0, 0, 0, 0]
        ], [107, 105, 5, 203, 204], [7, 104, 105, 106, 302]));
    }


    return (
        
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5">
                        Voltorb Flip Solver
                    </Typography>
                </Toolbar>
            </AppBar>

            <Button variant="outlined" onClick={reset} style={{margin:"20px"}}>Reset All</Button>
            <Button variant="outlined" onClick={resetBoardOnly} style={{margin:"20px"}}>Reset Board Only</Button>
            <Button variant="outlined" onClick={demo} style={{margin:"20px"}}>Try Demo</Button>
            <Grid item container spacing={2}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <VoltorbGrid xs={12} boardValues={boardValues} boardScores={boardScores} updateBoardValues={updateBoardValues}/>
                </Grid>
                <Grid item xs={1}>
                    <VoltorbBar xs={12} isRow={true} arraySum={rowSum} updateArray={updateRow} />
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={9}>
                    <VoltorbBar xs={12} isRow={false} arraySum={colSum} updateArray ={updateCol} /> 
                </Grid>
            </Grid>
        </div>
    );
}
