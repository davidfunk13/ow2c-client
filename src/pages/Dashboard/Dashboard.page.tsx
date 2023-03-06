import { Button, Grid, TextField } from "@mui/material";
import { FC, SyntheticEvent } from "react";
import ViewProvider from "../../providers/ViewProvider";
import { useAppSelector } from "../../redux/hooks";
import { useCreateSessionMutation, useGetSessionsQuery } from "../../redux/services/sessionApi";
import { selectBattletagId } from "../../redux/slices/battletagSlice";
import breadcrumbs from "./Dashboard.page.breadcrumbs";
import { useFormik } from "formik";
import validation from "../../utils/formValidations/addSessionFormValidation";
import submitFormWithPrevent from "../../utils/submitFormWithPrevent";
import SessionTable from "../../components/SessionTable/SessionTable";
import ItemBox from "../../components/ItemBox/ItemBox";

interface DashboardPageProps { }

interface SessionFormValues {
    sessionName: string;
}

const DashboardPage: FC<DashboardPageProps> = () => {
    const battletagId = useAppSelector(selectBattletagId);
    const { data = [], isLoading } = useGetSessionsQuery({ id: battletagId }, { skip: !battletagId });
    const initialValues: SessionFormValues = { sessionName: "" };
    const [createSession] = useCreateSessionMutation();

    const formik = useFormik({
        initialValues,
        validationSchema: validation,
        validateOnChange: false,
        onSubmit: (values) => createSession({
            battletagId,
            name: values.sessionName
        })
    });

    const { values, handleChange, handleSubmit, errors } = formik;

    return (
        <ViewProvider heading={"Dashboard"} breadcrumbs={breadcrumbs}>
            <Grid container spacing={2} component={"form"} onSubmit={(e: SyntheticEvent) => submitFormWithPrevent(e, handleSubmit)} item xs={12}>
                <Grid item xs={12} md={7} lg={6}>
                    <ItemBox boxTitle={"Add Session"}>
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
                            <Button color={"primary"} variant={"contained"} type={"submit"}>
                                {"Submit"}
                            </Button>
                        </Grid>
                    </ItemBox>
                </Grid>
                <Grid item xs={12}>
                    <ItemBox boxTitle={"Current Sessions"}>
                        <Grid item xs={12}>
                            <SessionTable loading={isLoading} rows={data} />
                        </Grid>
                    </ItemBox>
                </Grid>
            </Grid>
        </ViewProvider >
    );
};

export default DashboardPage;
