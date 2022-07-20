import { Card, CardContent, Typography } from "@mui/material";

export default function VoltorbCell(props) {
    return (<div>
        <Card variant="outlined" square>
            <CardContent> 
                <Typography>{props.val}</Typography> 
                <Typography>{props.score}</Typography>
            </CardContent>
        </Card>
    </div>
    )
}
