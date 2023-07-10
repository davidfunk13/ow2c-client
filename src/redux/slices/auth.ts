import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AuthState {
    authLoading: boolean;
}

const initialState: AuthState = {authLoading:false};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase("auth/login/pending", (state: AuthState, action) => {
            state.authLoading = true;
        });
        builder
        .addCase("auth/login/fulfilled", (state: AuthState, action) => {
            state.authLoading = false;
            console.log(action);
        });
    }
});

export default authSlice.reducer;
