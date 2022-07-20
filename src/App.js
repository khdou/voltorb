import "./styles.css";
import { solveVoltorbFlip, print2D } from "./calculation.js";
import VoltorbGrid from "./components/VoltorbGrid";
import { Grid } from "@mui/material";
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
    
    const [boardScores, setBoardScores]= useState(solveVoltorbFlip(boardValues, rowSum, colSum));

    const updateBoardValues = (row, col, val) => {
        let newBoard = boardValues.map(row => row.slice());
        newBoard[row][col] = val;
        setBoardValues(newBoard);
    }

    const updateRow = (arr) => {
        setRowSum(arr);
    }

    const updateCol = (arr) => {
        setColSum(arr);
    }

    return (
        <div className="App">
            <Grid>
                <Grid container spacing={2}>
                    <VoltorbGrid xs={10} updateBoardValues={updateBoardValues}/>
                    <VoltorbBar xs={2} isRow={true} arraySum={rowSum} updateArray={updateRow} />
                </Grid>
                <Grid>
                    <VoltorbBar isRow={false} arraySum={colSum} updateArray ={updateCol} /> 
                </Grid>
            </Grid>
        </div>
    );
}
