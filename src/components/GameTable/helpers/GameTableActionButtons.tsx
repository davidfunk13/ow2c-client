import { Delete } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { FC } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { selectBattletagId } from "../../../redux/slices/battletagSlice";
import { useDeleteGameMutation } from "../../../redux/services/gameApi";
import { selectSessionId } from "../../../redux/slices/sessionSlice";
import Game from "../../../types/Game";

interface GameTableActionButtonsProps {
    row: Game
}

const GameTableActionButtons: FC<GameTableActionButtonsProps> = ({ row }) => {
    const [deleteGame] = useDeleteGameMutation();
    const battletagId = useAppSelector(selectBattletagId);
    const sessionId = useAppSelector(selectSessionId);

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
