import { Grid, Typography } from "@mui/material";
import { FC, SyntheticEvent } from "react";
import { useRouteError } from "react-router-dom";
import ViewProvider from "../../providers/ViewProvider";

interface RouterError { statusText: string, message: string }
interface ErrorPageProps { }

const ErrorPage: FC<ErrorPageProps> = () => {
    // const error = useRouteError() as RouterError;

    return (
        <ViewProvider heading={"Error"} breadcrumbs={[]}>
            <Grid container spacing={2} >
                <Grid container spacing={2} item xs={12}>
                    <Grid item xs={12}>
                        <Typography variant={"h4"}>
                            Something Went Wrong
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </ViewProvider>
    );
}

export default ErrorPage;
