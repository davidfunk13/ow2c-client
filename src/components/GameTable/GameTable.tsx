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
    const renderColumns = gameTableColumnHandler();

    return (
        <Box>
            <DataGrid
                disableSelectionOnClick
                autoHeight
                loading={loading}
                columns={renderColumns}
                rows={rows}
            />
        </Box >
    );
};

export default GameTable;
