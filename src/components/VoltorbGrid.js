import { Grid } from "@mui/material";
import { useState } from "react";
import VoltorbCell from "./VoltorbCell";

export default function VoltorbGrid(props) {
    
    const grid = [];

    for (let i = 0; i < props.boardValues.length; i++) {
        const gridRow = [];
        for (let j = 0; j < props.boardValues[i].length; j++) {
            gridRow.push(<VoltorbCell 
                            key={i*10+j}
                            val={props.boardValues[j][i]} 
                            score={props.boardScores[j][i]}
                            updateVal={(val)=>props.updateBoardValues(j,i,val)} 
                        />)
        }
        grid.push(<Grid item xs={2} key={i}> 
            {gridRow}
        </Grid>);
    }
    
    return (
        <Grid item container spacing={props.spacing} xs={props.xs}>
            {grid}
        </Grid>
    );
}