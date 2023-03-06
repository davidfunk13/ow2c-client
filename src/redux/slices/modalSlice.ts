import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";
import Battletag from "../../types/Battletag";
import Session from "../../types/Session";

interface ModalState {
    item: Session | Battletag
}

const initialState: ModalState = {
    item: {} as Session | Battletag
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModalItem: (state, action: PayloadAction<Session | Battletag>) => {
            state.item = action.payload;
        },
        resetModalItem: (state) => {
            state.item = initialState.item;
        }
    },
});

export const { setModalItem, resetModalItem } = modalSlice.actions;

export const selectModalItem = (state: RootState) => state.modal.item;

export default modalSlice.reducer;
