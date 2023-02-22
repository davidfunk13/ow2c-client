import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';

interface HorizontalStepperProps {
    step: number,
    setStep?: Dispatch<SetStateAction<number>>
    stepNames: string[]
}


interface LabelProps {
    optional?: React.ReactNode,
    error?: boolean
}

const HorizontalStepper: FC<HorizontalStepperProps> = ({step, setStep, stepNames }) => {
    const isStepFailed = (step: number) => {
        return step === 1;
    };


    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={step}>
                {stepNames.map((label, index) => {
                    const labelProps: LabelProps = {}

                    if (isStepFailed(index)) {
                        labelProps.optional = (
                            <Typography variant="caption" color="error">
                                Alert message
                            </Typography>
                        );

                        labelProps.error = true;
                    }

                    return (
                        <Step key={label}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </Box>
    );
};

export default HorizontalStepper;
