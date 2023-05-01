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
            localStorage.setItem("session", JSON.stringify(action.payload));
            state.session = action.payload;
        },
        removeSelectedSession: (state) => {
            localStorage.removeItem("session");
            state.session = initialState.session;
        },
        resetSessionSlice: (state) => {
            localStorage.removeItem("session");
            state.session = initialState.session;
        }
    },
});

export const { setSelectedSession, removeSelectedSession, resetSessionSlice } = sessionSlice.actions;

export const selectSession = (state: RootState) => state.session.session;
export const selectSessionId = (state: RootState) => state.session.session?.id;

export default sessionSlice.reducer;
