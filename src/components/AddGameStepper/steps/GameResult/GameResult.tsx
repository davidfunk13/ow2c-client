import { Button, FormControlLabel, FormHelperText, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import { useFormik } from "formik";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setHorizontalStepperStepBackward } from "../../../HorizontalStepper/horizontalStepperSlice";
import GameResultEnum from "../../../../types/GameResultEnum";
import submitFormWithPrevent from "../../../../utils/submitFormWithPrevent";
import validationSchema from "./inputValidation";
// import { useCreateGameMutation } from "../../../../redux/services/gameApi";
import { selectBattletagId } from "../../../../redux/slices/battletagSlice";
import { selectSession, selectSessionId } from "../../../../redux/slices/sessionSlice";
import { selectGameLocation, selectGameLocationName } from "../../addGameSlice.";

interface GameResultProps {

}

interface GameResultValues {
    result: GameResultEnum | null;
}

const initialValues: GameResultValues = { result: null };

const GameResult: FC<GameResultProps> = () => {
    const dispatch = useAppDispatch();
    // const [createGame] = useCreateGameMutation();
    const battletagId = useAppSelector(selectBattletagId);
    const sessionId = useAppSelector(selectSessionId) ?? "";
    const locationName = useAppSelector(selectGameLocationName) ?? "";

    const formik = useFormik({
        initialValues,
        validationSchema,
        validateOnChange: false,
        onSubmit: ({ result }) => {

            if (!battletagId || !sessionId || !locationName || !result) {
                return;
            }

            const gameData = {
                location: locationName,
                result
            };

            // createGame({
            //     battletagId,
            //     sessionId,
            //     gameData,
            // });
        }
    });

    const { values, setFieldValue, handleSubmit, handleChange, errors } = formik;

    return (
        <Grid container component={"form"} id={"game-result"} name={"select-location"} onSubmit={(e) => submitFormWithPrevent(e, handleSubmit)} spacing={2}>
            <Grid item xs={12}>
                <Typography variant={"h1"}>
                    {"Select Result"}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <RadioGroup
                    aria-labelledby={"game-result-radio-group-label"}
                    name={"result"}
                >
                    <FormControlLabel onChange={handleChange} value={1} control={<Radio />} label={"Win"} />
                    <FormControlLabel onChange={handleChange} value={0} control={<Radio />} label={"Loss"} />
                    <FormControlLabel onChange={handleChange} value={2} control={<Radio />} label={"Draw"} />
                </RadioGroup>
                <FormHelperText error={!!errors.result}>{errors.result}</FormHelperText>
            </Grid>
            <Grid item xs={12}>
                <Button variant={"contained"} onClick={() => dispatch(setHorizontalStepperStepBackward())} color={"primary"}>{"Previous"}</Button>
                <Button type={"submit"} variant={"contained"} color={"primary"}>{"Finish"}</Button>
            </Grid>
        </Grid>
    );
};

export default GameResult;
