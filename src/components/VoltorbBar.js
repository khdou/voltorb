import { Grid } from "@mui/material";
import Cell from "./Cell";

export default function VoltorbBar(props) {
    const numPoints = props.arraySum.map(sum => sum % 100);
    const numVoltorbs = props.arraySum.map(sum => Math.floor(sum / 100));

    const handlePointsChange = (index, val) => {
        const newArraySum = props.arraySum.slice();
        newArraySum[index] = numVoltorbs[index] * 100 + parseInt(val);
        props.updateArray(newArraySum);
    }

    const handleVoltorbsChange = (index, val) => {
        const newArraySum = props.arraySum.slice();
        newArraySum[index] = parseInt(val)*100 + numPoints[index];
        props.updateArray(newArraySum);
    }
    const direction= props.isRow ? "column" : "row";

    const cellList = [];
    for (let i = 0; i < numPoints.length; i++) {
        cellList.push(<Cell 
                        xs={2} 
                        key={i + 10*props.isRow} 
                        numPoints={numPoints[i]} 
                        numVoltorbs={numVoltorbs[i]} 
                        handlePointsChange={(e) => handlePointsChange(i,e.target.value)}
                        handleVoltorbsChange={(e) => handleVoltorbsChange(i,e.target.value)}
                    />);
    }

    return (<Grid direction={direction} item container spacing={props.spacing} xs={props.xs}>
        {cellList}
    </Grid>);
}