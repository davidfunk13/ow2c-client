import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider";

interface ErrorPageProps { }

const ErrorPage: FC<ErrorPageProps> = () => {
    return (
        <ViewProvider heading={"Error"} breadcrumbs={[]}>
            <Grid container spacing={2} >
                <Grid container spacing={2} item xs={12}>
                    <Grid item xs={12}>
                        <Typography variant={"h4"}>
                            {"Something Went Wrong"}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </ViewProvider>
    );
};

export default ErrorPage;
