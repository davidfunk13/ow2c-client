import { Grid, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import { Form, useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useGetLoginQuery } from "../../redux/services/authApi";
import { setBattletag } from "../../redux/slices/battletagSlice";
import { setErrorSnackbar, setSnackbarMessage, setSuccessSnackbar } from "../../redux/slices/notificationsSlice";

interface CallbackPageProps { }

const CallbackPage: FC<CallbackPageProps> = () => {
    const params = useLocation();
    const code = params.search.split("=")[1];
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!code) {
            dispatch(setErrorSnackbar("Something went wrong."));
            // navigate("/");
        }
    }, [])

    const { data, isLoading } = useGetLoginQuery(code);

    useEffect(() => {
        if (data?.battletag) {
            dispatch(setBattletag(data));
            dispatch(setSuccessSnackbar("Battletag successfully logged in."))
            return navigate("/");
        }
    }, [data]);

    console.log(data);
    return (
        <Grid container>
            <Typography variant="h1">Callback Page</Typography>
        </Grid>
    );
}


export default CallbackPage;
