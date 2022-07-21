import { Card, CardContent, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { useState } from "react";

export default function Cell(props) {

    return (<Card variant="outlined" square style={{borderColor: "#2196f3"}}>
        <CardContent style={{height:"90px", width:"140px"}} >
            <TextField variant="outlined"
                    label="Points"
                    value={props.numPoints}
                    onChange={props.handlePointsChange}
                    style={{padding:"0"}} />
            <TextField variant="outlined"
                    label="Voltorbs"
                    value={props.numVoltorbs}
                    onChange={props.handleVoltorbsChange}
                    style={{marginTop:"10px", padding:"0"}} 
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CatchingPokemonIcon/>
                          </InputAdornment>
                        ),
                      }}/>
        </CardContent>
    </Card>)
}