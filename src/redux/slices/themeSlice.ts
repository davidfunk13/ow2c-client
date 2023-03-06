import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";
import { AvailableThemes } from "../../types/AvailableThemes";

interface ThemeState {
    theme: AvailableThemes
}

const storage = localStorage.getItem("theme");

const initialState: ThemeState = { theme: storage ? JSON.parse(storage) : "light" };

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<AvailableThemes>) => {
            state.theme = action.payload;
            localStorage.setItem("theme", JSON.stringify(action.payload));
        }
    },
});

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
