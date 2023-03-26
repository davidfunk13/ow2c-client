import {  Grid } from "@mui/material";
import { FC } from "react";
import AddGameStepper from "../../components/AddGameStepper/AddGameStepper";
import { setHorizontalStepperStepBackward, setHorizontalStepperStepForward } from "../../components/HorizontalStepper/horizontalStepperSlice";
import ViewProvider from "../../providers/ViewProvider";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectSession } from "../../redux/slices/sessionSlice";
import breadcrumbs from "./AddGame.page.breadcrumbs";

interface AddGamePageProps { }

const AddGamePage: FC<AddGamePageProps> = () => {
    const session = useAppSelector(selectSession);
    const dispatch = useAppDispatch();

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
                  
                    <AddGameStepper />
                </Grid>
            </Grid>
        </ViewProvider>
    );
};

export default AddGamePage;
