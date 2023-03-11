import { Grid } from "@mui/material";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import HorizontalStepper from "../HorizontalStepper/HorizontalStepper";
import { selectHorizontalStepperStep, selectHorizontalStepperStepNames, setHorizontalStepperStepNames } from "../HorizontalStepper/horizontalStepperSlice";
import GameOutcome from "./steps/GameOutcome/GameOutcome";
import SelectLocationPlayed from "./steps/SelectLocationPlayed/SelectLocationPlayed";

interface AddGameStepperProps {

}

const renderStep = (stepName: string) => {
    switch (stepName) {
        case "Select Location":
            return <SelectLocationPlayed />;
        case "Outcome":
            return <GameOutcome />;

        default:
            return <>{"Select Map"}</>;
    }
};

const AddGameStepper: FC<AddGameStepperProps> = () => {
    const dispatch = useAppDispatch();
    const stepNames = useAppSelector(selectHorizontalStepperStepNames);
    const step = useAppSelector(selectHorizontalStepperStep);
    const current = stepNames[step];

    useEffect(() => {
        const stepNames = ["Select Location", "Outcome"];

        dispatch(setHorizontalStepperStepNames(stepNames));

        return () => {
            dispatch(setHorizontalStepperStepNames([]));
        };

    }, [dispatch]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <HorizontalStepper component={<>{"Test"}</>} />
            </Grid>
            <Grid item xs={12}>
                {renderStep(current)}
            </Grid>
        </Grid>
    );
};

export default AddGameStepper;
