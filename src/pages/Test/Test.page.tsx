import { Grid, Typography } from "@mui/material";
import { FC } from "react";

interface TestPageProps { }

const TestPage: FC<TestPageProps> = () => {

    return (
        <Grid container>
            <Typography variant="h1">Test</Typography>
        </Grid>
    );
}


export default TestPage;
