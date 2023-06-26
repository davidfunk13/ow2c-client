import { Box, Button, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Session from "../../types/Session";
import gameTableColumnHandler from "./helpers/GameTableColumnHandler";
import Modal from "../Modal/Modal";
import { setSelectedSession } from "../../redux/slices/sessionSlice";
import { initialState, selectModalItem, selectModalOpen, setModalItem, setModalOpen } from "../Modal/modalSlice";
import Game from "../../types/Game";

interface GameTableProps {
    loading: boolean
    rows: Game[]
}

const GameTable: FC<GameTableProps> = ({ loading, rows }) => {
    // const game = useAppSelector(selectModalItem) as Game;
    const dispatch = useAppDispatch();
    const modalOpen = useAppSelector(selectModalOpen);

    const handleCloseModal = () => {
        dispatch(setModalOpen(false));
    };

    const handleSelectGame = () => {
        // dispatch(setSelectedGame(game));
        dispatch(setModalItem(initialState.item));
        dispatch(setModalOpen(false));
    };

    const renderColumns = gameTableColumnHandler();

    const ModalButtons = (): JSX.Element => {
        return (
            <Grid container spacing={2} justifyContent={"flex-end"}>
                <Grid item xs={4}>
                    <Button fullWidth variant={"contained"} onClick={handleSelectGame}>
                        {"Submit"}
                    </Button>

                </Grid>
                <Grid item xs={4}>
                    <Button fullWidth variant={"contained"} color={"error"} onClick={handleCloseModal}>
                        {"Cancel"}
                    </Button>
                </Grid>
            </Grid>
        );
    };

    return (
        <Box>
            <DataGrid
                disableSelectionOnClick
                autoHeight
                loading={loading}
                columns={renderColumns}
                rows={rows}
            />
            <Modal modalButtons={ModalButtons} title={"Session"} open={modalOpen}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant={"body1"}>
                            {"Do you want to select this game?"}
                        </Typography>
                    </Grid>
                </Grid>
            </Modal>
        </Box >
    );
};

export default GameTable;
