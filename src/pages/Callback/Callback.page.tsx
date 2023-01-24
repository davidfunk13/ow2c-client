import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { Form } from "react-router-dom";

interface CallbackPageProps { }

const CallbackPage: FC<CallbackPageProps> = () => {
    return (
        <Grid container>
            <Typography variant="h1">Callback Page</Typography>
        </Grid>
    );
}


export default CallbackPage;
