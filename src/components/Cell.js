import { Card, TextField } from "@mui/material";
import { useState } from "react";

export default function Cell(props) {

    return (<Card>
        <TextField label="Points" variant="outlined" type="number" value={props.numPoints} onChange={props.handlePointsChange}/>
        <TextField label="Voltorbs" variant="outlined" type="number" value={props.numVoltorbs} onChange={props.handleVoltorbsChange}/>
    </Card>)
}