import { Button, Grid, TextField, Typography } from "@mui/material";
import { FC, SyntheticEvent } from "react";
import ViewProvider from "../../providers/ViewProvider";
import { useAppSelector } from "../../redux/hooks";
import { useCreateSessionMutation, useGetSessionsQuery } from "../../redux/services/sessionApi";
import { selectBattletagId } from "../../redux/slices/battletagSlice";
import breadcrumbs from "./Dashboard.page.breadcrumbs";
import { useFormik } from "formik";
import validation from "../../utils/formValidations/addSessionFormValidation";
import useStyles from "./Dashboard.styles";
import submitFormWithPrevent from "../../utils/submitFormWithPrevent";
import SessionTable from "../../components/SessionTable/SessionTable";

interface DashboardPageProps { }

interface SessionFormValues {
    sessionName: string;
}

const DashboardPage: FC<DashboardPageProps> = () => {

    const battletagId = useAppSelector(selectBattletagId);
    const { data = [], isLoading } = useGetSessionsQuery({ id: battletagId }, { skip: !battletagId });
    const initialValues: SessionFormValues = { sessionName: "" };
    const [createSession] = useCreateSessionMutation()
    const { classes } = useStyles();

    const formik = useFormik({
        initialValues,
        validationSchema: validation,
        validateOnChange: false,
        onSubmit: (values) => {
            createSession({ battletagId, name: values.sessionName });
            console.log(values)
        }
    });

    const { values, handleChange, handleSubmit, errors } = formik;


    return (
        <ViewProvider heading={"Dashboard"} breadcrumbs={breadcrumbs}>
            <Grid container spacing={2} >
                <Grid container spacing={2} component={'form'} onSubmit={(e: SyntheticEvent) => submitFormWithPrevent(e, handleSubmit)} item xs={12}>
                    <Grid item xs={12}>
                        <Typography variant={"h4"}>
                            Add New Session
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            error={Boolean(errors.sessionName)}
                            helperText={errors.sessionName}
                            onChange={handleChange}
                            name={"sessionName"}
                            value={values.sessionName}
                            label={"Session Name"}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant={"contained"} type={"submit"}>
                            Submit
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={"h4"}>
                            Current Sessions
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <SessionTable loading={isLoading} rows={data} />
                    </Grid>
                </Grid>
            </Grid>
        </ViewProvider>
    );
}

export default DashboardPage;