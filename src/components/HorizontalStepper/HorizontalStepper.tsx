import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetHorizontalStepperSlice, selectHorizontalStepperStep, selectHorizontalStepperStepNames } from "./horizontalStepperSlice";

interface HorizontalStepperProps { }

interface LabelProps {
    optional?: React.ReactNode,
    error?: boolean
}

const HorizontalStepper: FC<HorizontalStepperProps> = () => {
    const dispatch = useAppDispatch();
    const horizontalStepperStep = useAppSelector(selectHorizontalStepperStep);
    const horizontalStepperStepNames = useAppSelector(selectHorizontalStepperStepNames);

    useEffect(() => {
        return () => {
            dispatch(resetHorizontalStepperSlice());
        };
    }, [dispatch]);

    return (
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
    );
};

export default HorizontalStepper;
