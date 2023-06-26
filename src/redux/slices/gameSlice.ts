import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";
import Game from "../../types/Game";

interface GameState {
    game: Game | null;
}

const initialState: GameState = { game: null };

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        setSelectedGame: (state, action: PayloadAction<Game>) => {
            localStorage.setItem("game", JSON.stringify(action.payload));
            state.game = action.payload;
        },
        removeSelectedGame: (state) => {
            localStorage.removeItem("game");
            state.game = initialState.game;
        },
        resetGameSlice: (state) => {
            localStorage.removeItem("game");
            state.game = initialState.game;
        }
    },
});

export const { setSelectedGame, removeSelectedGame, resetGameSlice } = gameSlice.actions;

export const selectGame = (state: RootState) => state.game.game;
export const selectGameId = (state: RootState) => state.game.game?.id;

export default gameSlice.reducer;
