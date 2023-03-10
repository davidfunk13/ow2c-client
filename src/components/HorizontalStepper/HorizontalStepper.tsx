import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import React, { FC, ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetHorizontalStepperSlice, selectHorizontalStepperStep, selectHorizontalStepperStepNames } from "./horizontalStepperSlice";
import { Grid } from "@mui/material";

interface HorizontalStepperProps {
    component: ReactNode
}

interface LabelProps {
    optional?: React.ReactNode,
    error?: boolean
}

const HorizontalStepper: FC<HorizontalStepperProps> = ({ component }) => {
    const dispatch = useAppDispatch();
    const horizontalStepperStep = useAppSelector(selectHorizontalStepperStep);
    const horizontalStepperStepNames = useAppSelector(selectHorizontalStepperStepNames);

    useEffect(() => {
        return () => {
            dispatch(resetHorizontalStepperSlice());
        };
    }, [dispatch]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Stepper activeStep={horizontalStepperStep}>
                    {horizontalStepperStepNames.map((label, index) => {
                        const labelProps: LabelProps = {};

                        return (
                            <Step key={label}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </Grid>
            <Grid item xs={12}>
                {component}
            </Grid>
        </Grid>
    );
};

export default HorizontalStepper;
