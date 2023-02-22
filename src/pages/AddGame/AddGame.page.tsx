import { Button, Grid } from "@mui/material";
import { FC, useState } from "react";
import HorizontalStepper from "../../components/HorizontalStepper/HorizontalStepper";
import ViewProvider from "../../providers/ViewProvider";
import { useAppSelector } from "../../redux/hooks";
import { selectSession } from "../../redux/slices/sessionSlice";
import breadcrumbs from "./AddGame.page.breadcrumbs";
import useStyles from "./AddGame.styles";

interface AddGamePageProps { }

const AddGamePage: FC<AddGamePageProps> = () => {
    const session = useAppSelector(selectSession);
    
    const [step, setStep] = useState(0);

    const steps = ['Select Map',];
    
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
                    <Button onClick={() => setStep((s) => s + 1)}>FWD</Button>
                    <Button onClick={() => setStep((s) => s >= 1 ? s - 1 : s)}>BACK</Button>
                    <HorizontalStepper stepNames={steps} step={step} />
                </Grid>
            </Grid>
        </ViewProvider>
    );
}

export default AddGamePage;