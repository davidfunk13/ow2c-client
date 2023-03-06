import { Delete, FileOpen } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { useDeleteSessionMutation } from "../../../redux/services/sessionApi";
import { setModalItem } from "../../../redux/slices/modalSlice";
import Session from "../../../types/Session";

interface SessionTableActionButtonsProps {
    setModalOpen: Dispatch<SetStateAction<boolean>>,
    battletagId: string
    row: Session
}

const SessionTableActionButtons: FC<SessionTableActionButtonsProps> = ({ setModalOpen, battletagId, row }) => {

    const [deleteSession] = useDeleteSessionMutation();
    const dispatch = useAppDispatch();

    const handleSelectSession = () => {
        dispatch(setModalItem(row));
        setModalOpen(true);
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
