import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/store'
import Battletag from '../../types/Battletag'

interface AuthState {
    battletag: Battletag
    token: string
}

const initialState: AuthState = {
    battletag: <Battletag>{},
    token: "",
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticatedBattletag: (state, action) => {
            state.battletag = action.payload.battletag;
            state.token = action.payload.token;
        }
    },
})

export const { setAuthenticatedBattletag } = authSlice.actions

export const selectBattletag = (state: RootState) => state.auth.battletag.battletag
export const selectToken = (state: RootState) => state.auth.token
export const selectBattletagSub = (state: RootState) => state.auth.battletag.sub
export const selectBattletagId = (state: RootState) => state.auth.battletag.battletag_id
export const selectFullBattletag = (state: RootState) => state.auth.battletag;

export default authSlice.reducer