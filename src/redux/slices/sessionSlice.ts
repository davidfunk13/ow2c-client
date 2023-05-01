import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";
import Session from "../../types/Session";

interface SessionState {
    session: Session | null;
}

const initialState: SessionState = { session: null };

export const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        setSelectedSession: (state, action: PayloadAction<Session>) => {
            sessionStorage.setItem("session", JSON.stringify(action.payload));
            state.session = action.payload;
        },
        removeSelectedSession: (state) => {
            sessionStorage.removeItem("session");
            state.session = initialState.session;
        },
        resetSessionSlice: (state) => {
            sessionStorage.removeItem("session");
            state.session = initialState.session;
        }
    },
});

export const { setSelectedSession, removeSelectedSession, resetSessionSlice } = sessionSlice.actions;

export const selectSession = (state: RootState) => state.session.session;

export default sessionSlice.reducer;
