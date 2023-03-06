import { Button, Grid } from "@mui/material";
import { FC, useEffect } from "react";
import HorizontalStepper from "../../components/HorizontalStepper/HorizontalStepper";
import { setHorizontalStepperStepBackward, setHorizontalStepperStepForward, setHorizontalStepperStepNames } from "../../components/HorizontalStepper/horizontalStepperSlice";
import ViewProvider from "../../providers/ViewProvider";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectSession } from "../../redux/slices/sessionSlice";
import breadcrumbs from "./AddGame.page.breadcrumbs";

interface AddGamePageProps { }

const AddGamePage: FC<AddGamePageProps> = () => {
    const session = useAppSelector(selectSession);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        const stepNames = ["Select Map", "Outcome"];
        
        dispatch(setHorizontalStepperStepNames(stepNames));
        
        return () => {
            dispatch(setHorizontalStepperStepNames([]));
        };
        
    }, [dispatch]);

    const goFwd = () => dispatch(setHorizontalStepperStepForward());
    const goBack = () => dispatch(setHorizontalStepperStepBackward());

    //going to support multiple rounds. 
    //keep wins/loss tally @ top of game object.
    //if hybrid/payload, keep track of checkpoints. 
    // pick map
    // pick location
    // pick hero(es)
    // pick win/loss
    // repeat
    // victory?

    return (
        <ViewProvider heading={"Add Game"} breadcrumbs={breadcrumbs(String(session.id))}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Button onClick={() => goBack()}>{"BACK"}</Button>
                    <Button onClick={() => goFwd()}>{"FWD"}</Button>
                    <HorizontalStepper />
                </Grid>
            </Grid>
        </ViewProvider>
    );
};

export default AddGamePage;
