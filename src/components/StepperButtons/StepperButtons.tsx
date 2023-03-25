import { Button, Grid } from "@mui/material";
import React, { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectHorizontalStepperIsFirstStep, selectHorizontalStepperIsLastStep } from "../HorizontalStepper/horizontalStepperSlice";

interface StepperButtonProps {

}

const StepButtons: FC<StepperButtonProps> = () => {
    const isFirstStep = useAppSelector(selectHorizontalStepperIsFirstStep);
    const isLastStep = useAppSelector(selectHorizontalStepperIsLastStep);

    return (
        <Grid container justifyItems={"center"} spacing={2}>
            <Grid item xs={4}>
                <Button type={"submit"}>
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
