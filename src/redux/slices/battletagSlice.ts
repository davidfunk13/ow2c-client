import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";
import Battletag from "../../types/Battletag";

interface BattletagState {
    id: Battletag["id"]
    battletag_id: Battletag["blizz_id"]
    battletag: Battletag["battletag"]
}

const initialState: BattletagState = {
    id: "",
    battletag_id: 0,
    battletag: ""
};

export const battletagSlice = createSlice({
    name: "battletag",
    initialState,
    reducers: {
        setBattletag: (state, action: PayloadAction<Battletag>) => {
            state.id = action.payload.id;
            state.battletag_id = action.payload.blizz_id;
            state.battletag = action.payload.battletag;
        },
        resetBattletagSlice: (state) => {
            localStorage.removeItem("id");
            localStorage.removeItem("battletag");
            localStorage.removeItem("battletag_id");
            state.battletag = initialState.battletag;
        }
    },
});

export const { setBattletag, resetBattletagSlice } = battletagSlice.actions;

export const selectBattletagName = (state: RootState) => state.battletag.battletag;
export const selectBattletagId = (state: RootState) => state.battletag.id;
export const selectBattletagBattletagId = (state: RootState) => state.battletag.battletag_id;
export const selectFullBattletag = (state: RootState) => state.battletag.battletag;

export default battletagSlice.reducer;
