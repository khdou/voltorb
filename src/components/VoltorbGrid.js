import { Grid } from "@mui/material";
import { useState } from "react";
import VoltorbCell from "./VoltorbCell";

export default function VoltorbGrid() {
    const [board, setBoard] = useState([]);
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                </Grid>
                <Grid item xs={2}>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                </Grid>
                <Grid item xs={2}>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                </Grid>
                <Grid item xs={2}>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                </Grid>
                <Grid item xs={2}>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                    <VoltorbCell val={1} score={0.1}/>
                </Grid>
            </Grid>
        </div>
    );
}