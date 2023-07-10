import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ViewProvider from "../../components/ViewProvider/ViewProvider";
import { useAppDispatch } from "../../redux/hooks";
import { setBattletag } from "../../redux/slices/battletagSlice";
import { setErrorSnackbar, setSuccessSnackbar } from "../../redux/slices/notificationsSlice";
import breadcrumbs from "./Callback.page.breadcrumbs";
import login from "../../redux/thunks/auth/login";

interface CallbackPageProps { }

const CallbackPage: FC<CallbackPageProps> = () => {
    const params = useLocation();
    const code = params.search.split("=")[1];
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!code) {
            dispatch(setErrorSnackbar("Something went wrong."));
        }
        dispatch(login(code));
    }, [code, dispatch]);

    // useEffect(() => {
    //     console.log(data);
    //     if (data?.battletag) {
    //         localStorage.setItem("id", data.id);
    //         localStorage.setItem("battletag", data.battletag);
    //         localStorage.setItem("battletag_id", JSON.stringify(data.blizz_id));
    //         dispatch(setBattletag(data));
    //         dispatch(setSuccessSnackbar("Battletag successfully logged in."));
    //         return navigate("/");
    //     }
    // }, [data, dispatch, navigate]);

    return (
        <ViewProvider breadcrumbs={breadcrumbs} heading={"Callback"}>

        </ViewProvider>
    );
};

export default CallbackPage;
