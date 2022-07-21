import { Card, CardContent, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, RadioGroup, Select, TextField, Typography } from "@mui/material";

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

    const updateBoardVal = (val) => {
        if (props.val !== 0) {
            props.updateVal(0);
        } else {
            props.updateVal(val);
        }
    }
    const isDisabled = props.val === 0 ? false : true;
    return (<div>
        <Card variant="outlined" square style={{backgroundColor: color, width:"100%"}}>
            <CardContent>
                
                <RadioGroup row>
                    <FormControlLabel control={<Checkbox checked={props.val===1} onChange={()=>updateBoardVal(1)} />} label="1" />
                    <FormControlLabel control={<Checkbox checked={props.val===2} onChange={()=>updateBoardVal(2)} />} label="2" />
                    <FormControlLabel control={<Checkbox checked={props.val===3} onChange={()=>updateBoardVal(3)} />} label="3" />
                 </RadioGroup>
                {/* <FormControl fullWidth>
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
                </FormControl> */}
                <Typography color={shouldShowColor() ? "black" : "white"}>
                    {props.score.toString()}%
                </Typography>
            </CardContent>
        </Card>
    </div>
    )
}
