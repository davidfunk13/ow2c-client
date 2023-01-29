interface NotificationsState {
    message: string
    open: boolean
    variant: AlertColor
}
import { AlertColor } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const initialState: NotificationsState = {
    open: false,
    message: "",
    variant: "success"
};

export const notificationsSlice = createSlice({
    name: "snackbar",
    initialState,
    reducers: {
        openSnackbar: (state, action) => {
            state.open = action.payload;
        },
        setSnackbarMessage: (state, action) => {
            state.message = action.payload;
        },
        setSnackbarVariant: (state, action) => {
            state.variant = action.payload;
        },
        setErrorSnackbar: (state, action) => {
            state.open = true;
            state.variant = "error";
            state.message = action.payload;
        },
        setSuccessSnackbar: (state, action) => {
            state.variant = "success";
            state.message = action.payload;
        },
        resetNotificationsSlice: (state) => {
            Object.assign(state, initialState);
        }
    },
});

export const {
    openSnackbar,
    setSnackbarMessage,
    setSuccessSnackbar,
    setErrorSnackbar,
    setSnackbarVariant,
    resetNotificationsSlice
} = notificationsSlice.actions;

export const selectSnackbarOpen = (state: RootState) => state.notifications.open;
export const selectSnackbarMessage = (state: RootState) => state.notifications.message;
export const selectSnackbarVariant = (state: RootState) => state.notifications.variant;

export default notificationsSlice.reducer;