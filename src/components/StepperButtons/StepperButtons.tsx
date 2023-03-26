import { Button, Grid } from "@mui/material";
import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectHorizontalStepperIsFirstStep, selectHorizontalStepperIsLastStep, setHorizontalStepperStepBackward, setHorizontalStepperStepForward } from "../HorizontalStepper/horizontalStepperSlice";

interface StepperButtonProps {

}

const StepButtons: FC<StepperButtonProps> = () => {
    const isFirstStep = useAppSelector(selectHorizontalStepperIsFirstStep);
    const isLastStep = useAppSelector(selectHorizontalStepperIsLastStep);
    const goFwd = () => dispatch(setHorizontalStepperStepForward());
    const goBack = () => dispatch(setHorizontalStepperStepBackward());   
    const dispatch = useAppDispatch();
    return (
        <Grid container justifyItems={"center"} spacing={2}>
            <Grid item xs={4}>
                <Button type={"submit"} id={"select-location"}>
                    {isLastStep ? "Finish" : "Next"}
                </Button>
            </ Grid>

            <Grid item xs={4}>
                <Button disabled={isFirstStep} color={"error"}>
                    {"Previous"}
                </Button>
            </ Grid>
            <Grid item xs={4}>
                <Button color={"error"}>
                    {"Cancel"}
                </Button>
            </ Grid>
        </Grid>
    );
};

export default StepButtons;
