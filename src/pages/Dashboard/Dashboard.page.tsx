import { Button, Grid, TextField, Typography } from "@mui/material";
import { FC, SyntheticEvent, useEffect, useState } from "react";
import ViewProvider from "../../providers/ViewProvider";
import { useAppSelector } from "../../redux/hooks";
import { useCreateSessionMutation, useGetSessionsQuery } from "../../redux/services/sessionApi";
import { selectBattletagId } from "../../redux/slices/battletagSlice";
import breadcrumbs from "./Dashboard.page.breadcrumbs";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Session from "../../types/Session";
import { useFormik } from "formik";
import validation from "../../utils/formValidations/addSessionFormValidation";

interface DashboardPageProps { }

interface SessionFormValues {
    sessionName: string;
}

const DashboardPage: FC<DashboardPageProps> = () => {

    const battletagId = useAppSelector(selectBattletagId);
    const { data = [], isLoading } = useGetSessionsQuery({ id: battletagId }, { skip: !battletagId });
    const initialValues: SessionFormValues = { sessionName: "" };

    const [createSession, result] = useCreateSessionMutation()

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

    const submitForm = (e: SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit();
    }

    console.log(errors)

    return (
        <ViewProvider heading={"Dashboard"} breadcrumbs={breadcrumbs}>
            <Grid container>
                <Grid component={'form'} onSubmit={submitForm} item xs={12}>
                    <Typography variant="h4">
                        Add New Session
                    </Typography>
                    <TextField error={Boolean(errors.sessionName)} helperText={errors.sessionName} onChange={handleChange} name={"sessionName"} value={values.sessionName} label={"Session Name"} />
                    <Button type={"submit"}>
                        Submit
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4">
                        Current Sessions
                    </Typography>
                    <DataGrid
                        autoHeight
                        loading={isLoading}
                        columns={[{ field: "name", headerName: "Session Name", flex: 1 }]}
                        rows={data}
                    />
                </Grid>
            </Grid>
        </ViewProvider>
    );
}

export default DashboardPage;