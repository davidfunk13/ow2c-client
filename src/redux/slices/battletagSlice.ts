import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/store'
import Battletag from '../../types/Battletag'

interface BattletagState {
    battletag: Battletag
}

const initialState: BattletagState = {
    battletag: <Battletag>{},
}

export const authSlice = createSlice({
    name: 'battletag',
    initialState,
    reducers: {
        setBattletag: (state, action) => {
            state.battletag = action.payload.battletag;
        }
    },
})

export const { setBattletag } = authSlice.actions

export const selectBattletagName = (state: RootState) => state.auth.battletag.battletag
export const selectBattletagId = (state: RootState) => state.auth.battletag.battletag_id
export const selectBattletagSub = (state: RootState) => state.auth.battletag.sub
export const selectFullBattletag = (state: RootState) => state.auth.battletag;

export default authSlice.reducer