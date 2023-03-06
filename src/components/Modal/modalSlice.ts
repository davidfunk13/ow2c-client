import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";
import AppItems from "../../types/AppItems";
import Battletag from "../../types/Battletag";
import Session from "../../types/Session";

interface ModalState {
    open: boolean
    item: AppItems
}

export const initialState: ModalState = {
    open: false,
    item: {} as AppItems
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModalItem: (state, action: PayloadAction<Session | Battletag>) => {
            state.item = action.payload;
        },
        setModalOpen: (state, action: PayloadAction<boolean>) => {
            state.open = action.payload;
        },
        resetModal: (state) => {
            state.item = initialState.item;
            state.open = initialState.open;
        }
    },
});

export const { setModalOpen, setModalItem, resetModal } = modalSlice.actions;

export const selectModalItem = (state: RootState) => state.modal.item;
export const selectModalOpen = (state: RootState) => state.modal.open;

export default modalSlice.reducer;
