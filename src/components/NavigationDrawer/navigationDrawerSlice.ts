import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";

interface DrawerState {
    open: boolean
}

const initialState: DrawerState = { open: false };

export const navigationDrawerSlice = createSlice({
    name: "navigationDrawer",
    initialState,
    reducers: {
        setDrawerOpen: (state, action: PayloadAction<boolean>) => {
            state.open = action.payload;
        },
    },
});

export const { setDrawerOpen } = navigationDrawerSlice.actions;

export const selectDrawerOpen = (state: RootState) => state.navigationDrawer.open;

export default navigationDrawerSlice.reducer;
