import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import GameOutcomeEnum from "../../types/GameOutcomeEnum";
import { Location } from "../../types/Location";

interface AddGameState {
    location: Location
    outcome: GameOutcomeEnum | null
}

const initialState: AddGameState = {
    location: {} as Location,
    outcome: null
};

export const addGameSlice = createSlice({
    name: "addGame",
    initialState,
    reducers: {
        setGameLocation: (state, action) => {
            state.location = action.payload;
        },
        setGameOutcome: (state, action) => {
            state.outcome = action.payload;
        }
    },
});

export const { setGameLocation, setGameOutcome } = addGameSlice.actions;

export const selectGameLocation = (state: RootState) => state.addGame.location;
export const selectGameOutcome = (state: RootState) => state.addGame.outcome;

export default addGameSlice.reducer;
