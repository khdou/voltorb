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
    return (<Card variant="outlined" square style={{borderColor: "#2196f3"}}>
        <CardContent style={{height:"80px", width:"107px"}}>
            <FormControl fullWidth style={{marginBottom: "12px"}}>
                <InputLabel>Points</InputLabel>
                <Select
                    label="Points"
                    value={props.numPoints}
                    onChange={props.handlePointsChange}
                    style={{height:"35px"}} 
                >
                    {pMenuItems} 
                        
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel>Voltorbs</InputLabel>
                <Select
                    label="Voltorbs"
                    value={props.numVoltorbs}
                    onChange={props.handleVoltorbsChange}
                    style={{height:"35px"}} 
                >
                    {vMenuItems}      
                </Select>
            </FormControl>
        </CardContent>
    </Card>)
}