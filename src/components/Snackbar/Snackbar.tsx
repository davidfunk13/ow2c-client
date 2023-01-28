import { Alert, Snackbar } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { initialState, selectSnackbarMessage, selectSnackbarVariant, setSnackbarMessage, setSnackbarVariant } from "../../redux/slices/notificationsSlice";

interface IAppSnackbar { }

const AppSnackbar: FC<IAppSnackbar> = () => {
    const dispatch = useAppDispatch();
    const snackbarMessage = useAppSelector(selectSnackbarMessage);
    const snackbarVariant = useAppSelector(selectSnackbarVariant);
    const snackbarOpen = !!snackbarMessage;

    const handleCloseSnackbar = () => {
        dispatch(setSnackbarVariant(initialState.variant));
        dispatch(setSnackbarMessage(initialState.message));
    };

    ///yooooou need to rework this into a snackbar stack, because its way better looking than having the message change as its closing from the previous timeout..

    return (
        <Snackbar
            data-testid={"snackbar"}
            open={snackbarOpen}
            autoHideDuration={2000}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            onClose={handleCloseSnackbar}
        >
            <Alert data-testid={"snackbar-message"} severity={snackbarVariant} onClose={handleCloseSnackbar}>
                {snackbarMessage}
            </Alert>
        </Snackbar>
    );
};

export default AppSnackbar;