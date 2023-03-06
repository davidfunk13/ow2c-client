import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";

interface DrawerState {
    open: boolean
}

const initialState: DrawerState = { open: false };

export const drawerSlice = createSlice({
    name: "drawer",
    initialState,
    reducers: {
        setDrawerOpen: (state, action: PayloadAction<boolean>) => {
            state.open = action.payload;
        },
    },
});

export const { setDrawerOpen } = drawerSlice.actions;

export const selectDrawerOpen = (state: RootState) => state.drawer.open;

export default drawerSlice.reducer;
