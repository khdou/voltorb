import { Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

export default function VoltorbCell(props) {

    const cMenuItems = [];
    for (let i = 0; i <= 3; i++) {
        cMenuItems.push(<MenuItem key={i} value={i}>{i}</MenuItem>);
    }
    const percentageToHsl = (percentage) =>
        'hsl(' + (percentage * -120 + 120) + ', 100%, 50%)';
    

    const shouldShowColor = () => {
        if (isNaN(props.score)) {
            return false;
        } else if (props.score == 0 && props.val != 0) {
            return false;
        }
        return true;
    }
    const color = shouldShowColor() ? percentageToHsl(props.score / 100) : "white";

    return (<div>
        <Card variant="outlined" square style={{backgroundColor: color}}>
            <CardContent>
                <FormControl fullWidth>
                    <InputLabel>Points</InputLabel>
                    <Select
                        label="Points"
                        value={props.val}
                        onChange={props.updateVal}
                        variant="outlined"
                        style={{height : "45px"}}
                        >
                        {cMenuItems}      
                    </Select>
                </FormControl>
                <Typography color={shouldShowColor() ? "black" : "white"}
                    style={{height: "25px", marginTop:"10px"}}>
                    {props.score.toString()}%
                </Typography>
            </CardContent>
        </Card>
    </div>
    )
}
