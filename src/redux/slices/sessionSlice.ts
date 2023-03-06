import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";
import Session from "../../types/Session";

interface SessionState {
    session: Session
}

const initialState: SessionState = { session: {} as Session };

export const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        setSelectedSession: (state, action: PayloadAction<Session>) => {
            sessionStorage.setItem("session", JSON.stringify(action.payload));
            state.session = action.payload;
        },
        resetSessionSlice: (state) => {
            sessionStorage.removeItem("session");
            state.session = initialState.session;
        }
    },
});

export const { setSelectedSession, resetSessionSlice } = sessionSlice.actions;

export const selectSession = (state: RootState) => state.session.session;

export default sessionSlice.reducer;
