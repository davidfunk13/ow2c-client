import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";

interface HorizontalStepperState {
    step: number
    stepNames: string[]
}

const initialState: HorizontalStepperState = {
    step: 0,
    stepNames: []
};

export const horizonalStepperSlice = createSlice({
    name: "horizonalStepper",
    initialState,
    reducers: {
        setHorizontalStepperStepForward: (state) => {
            if (state.step < state.stepNames.length - 1) {
                state.step = state.step + 1;
            }
        },
        setHorizontalStepperStepBackward: (state) => {
            if (state.step >= 1) {
                state.step = state.step - 1;
            }
        },
        setHorizontalStepperStepNames: (state, action: PayloadAction<string[]>) => {
            state.stepNames = action.payload;
        },
        resetHorizontalStepperSlice: (state) => {
            state.stepNames = initialState.stepNames;
            state.step = initialState.step;
        }
    },
});

export const {
    setHorizontalStepperStepForward,
    setHorizontalStepperStepBackward,
    setHorizontalStepperStepNames,
    resetHorizontalStepperSlice
} = horizonalStepperSlice.actions;

export const selectHorizontalStepperStep = (state: RootState) => state.horizontalStepper.step;
export const selectHorizontalStepperStepNames = (state: RootState) => state.horizontalStepper.stepNames;

export default horizonalStepperSlice.reducer;
