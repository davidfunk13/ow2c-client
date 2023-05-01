import { Box, Button, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Session from "../../types/Session";
import sessionTableColumnHandler from "./helpers/SessionTableColumnHandler";
import Modal from "../Modal/Modal";
import { setSelectedSession } from "../../redux/slices/sessionSlice";
import { initialState, selectModalItem, selectModalOpen, setModalItem, setModalOpen } from "../Modal/modalSlice";

interface SessionTableProps {
    loading: boolean
    rows: Session[]
}

const SessionTable: FC<SessionTableProps> = ({ loading, rows }) => {
    const session = useAppSelector(selectModalItem) as Session;
    const dispatch = useAppDispatch();
    const modalOpen = useAppSelector(selectModalOpen);

    const handleCloseModal = () => {
        dispatch(setModalOpen(false));
    };

    const handleSelectSession = () => {
        dispatch(setSelectedSession(session));
        dispatch(setModalItem(initialState.item));
        dispatch(setModalOpen(false));
    };

    const renderColumns = sessionTableColumnHandler();

    const ModalButtons = (): JSX.Element => {
        return (
            <Grid container spacing={2} justifyContent={"flex-end"}>
                <Grid item xs={4}>
                    <Button fullWidth variant={"contained"} onClick={handleSelectSession}>
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
                disableRowSelectionOnClick
                autoHeight
                loading={loading}
                columns={renderColumns}
                rows={rows}
            />
            <Modal modalButtons={ModalButtons} title={"Session"} open={modalOpen}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant={"body1"}>
                            {"Do you want to select this session with the name of "}<b>{session.name}{"?"}</b>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            {"When a session is selected, you may begin adding or editing games in this session."}
                        </Typography>
                    </Grid>
                </Grid>
            </Modal>
        </Box >
    );
};

export default SessionTable;
