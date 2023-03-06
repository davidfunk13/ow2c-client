import { Delete, FileOpen } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useDeleteSessionMutation } from "../../../redux/services/sessionApi";
import { setModalItem, setModalOpen } from "../../Modal/modalSlice";
import Session from "../../../types/Session";
import { selectBattletagId } from "../../../redux/slices/battletagSlice";

interface SessionTableActionButtonsProps {
    row: Session
}

const SessionTableActionButtons: FC<SessionTableActionButtonsProps> = ({ row }) => {
    const [deleteSession] = useDeleteSessionMutation();
    const battletagId = useAppSelector(selectBattletagId);

    const dispatch = useAppDispatch();

    const handleSelectSession = () => {
        dispatch(setModalItem(row));
        dispatch(setModalOpen(true));
    };

    return (
        <Grid container>
            <Grid item xs={2}>
                <IconButton onClick={handleSelectSession}>
                    <FileOpen />
                </IconButton>
            </Grid>
            <Grid item xs={2}>
                <IconButton onClick={() => deleteSession({
                    battletagId,
                    sessionId: row.id
                })}>
                    <Delete />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default SessionTableActionButtons;
