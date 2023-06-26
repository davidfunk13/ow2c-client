import { Delete, FileOpen } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useDeleteSessionMutation } from "../../../redux/services/sessionApi";
import { setModalItem, setModalOpen } from "../../Modal/modalSlice";
import Session from "../../../types/Session";
import { selectBattletagId } from "../../../redux/slices/battletagSlice";
import { useDeleteGameMutation } from "../../../redux/services/gameApi";
import { selectSessionId } from "../../../redux/slices/sessionSlice";

interface GameTableActionButtonsProps {
    row: Session
}

const GameTableActionButtons: FC<GameTableActionButtonsProps> = ({ row }) => {
    const [deleteGame] = useDeleteGameMutation();
    const battletagId = useAppSelector(selectBattletagId);
    const sessionId = useAppSelector(selectSessionId);

    const dispatch = useAppDispatch();

    const handleSelectGame = () => {
        dispatch(setModalItem(row));
        dispatch(setModalOpen(true));
    };

    return (
        <Grid container>
            <Grid item xs={2}>
                <IconButton onClick={() => deleteGame({
                    battletagId,
                    sessionId,
                    gameId: row.id
                })}>
                    <Delete />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default GameTableActionButtons;
