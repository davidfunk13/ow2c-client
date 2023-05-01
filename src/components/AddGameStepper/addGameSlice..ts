import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import GameResultEnum from "../../types/GameResultEnum";
import { Location } from "../../types/Location";

interface AddGameState {
    location: Location
    result: GameResultEnum | null
}

const initialState: AddGameState = {
    location: {} as Location,
    result: null
};

export const addGameSlice = createSlice({
    name: "addGame",
    initialState,
    reducers: {
        setGameLocation: (state, action) => {
            state.location = action.payload;
        },
        setGameResult: (state, action) => {
            state.result = action.payload;
        }
    },
});

export const { setGameLocation, setGameResult } = addGameSlice.actions;

export const selectGameLocation = (state: RootState) => state.addGame.location;
export const selectGameLocationName = (state: RootState) => state.addGame.location.name;
export const selectGameResult = (state: RootState) => state.addGame.result;

export default addGameSlice.reducer;
