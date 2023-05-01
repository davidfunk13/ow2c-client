import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { Grid, IconButton, Typography } from "@mui/material";
import { removeSelectedSession, selectSession } from "../../../../redux/slices/sessionSlice";
import { Close } from "@mui/icons-material";

interface SessionTagProps {

}
const SessionTag: FC<SessionTagProps> = (): JSX.Element | null => {
    const session = useAppSelector(selectSession);
    const dispatch = useAppDispatch();
    const removalDisabled = window.location.pathname.includes("session");

    return session ?
        <Grid container item xs={"auto"} alignItems={"center"}>
            <Grid item xs={"auto"}>
                <Typography fontSize={"small"} whiteSpace={"pre"}  >
                    {session.name}
                </Typography>
            </Grid>
            <Grid item xs={"auto"}>
                <IconButton size={"small"} disabled={removalDisabled} onClick={() => dispatch(removeSelectedSession())}>
                    <Close fontSize={"small"} />
                </IconButton>
            </Grid>
        </Grid>
        :
        null;
};

export default SessionTag;
