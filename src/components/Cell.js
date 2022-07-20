import { Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

export default function Cell(props) {

    const pMenuItems = [];
    for (let i = 0; i <= 10; i++) {
        pMenuItems.push(<MenuItem key={i} value={i}>{i}</MenuItem>);
    }  

    const vMenuItems = [];
    for (let i = 0; i <= 5; i++) {
        vMenuItems.push(<MenuItem key={i} value={i}>{i}</MenuItem>);
    }
    return (<Card variant="outlined">
        <CardContent>
            <FormControl fullWidth style={{marginBottom: "20px"}}>
                <InputLabel>Points</InputLabel>
                <Select
                    label="Points"
                    value={props.numPoints}
                    onChange={props.handlePointsChange}>
                    {pMenuItems}      
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel>Voltorbs</InputLabel>
                <Select
                    label="Voltorbs"
                    value={props.numVoltorbs}
                    onChange={props.handleVoltorbsChange}>
                    {vMenuItems}      
                </Select>
            </FormControl>
        </CardContent>
    </Card>)
}