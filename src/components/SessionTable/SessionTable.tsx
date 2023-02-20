import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectBattletagId } from '../../redux/slices/battletagSlice';
import Session from '../../types/Session';
import sessionTableColumnHandler from './helpers/SessionTableColumnHandler';
import Modal from '../Modal/Modal';
import StockModalButtons from '../Modal/StockModalButtons/StockModalButtons';
import { selectSession, setSelectedSession } from '../../redux/slices/sessionSlice';
import { resetModalItem, selectModalItem } from '../../redux/slices/modalSlice';

interface SessionTableProps {
    loading: boolean
    rows: Session[]
}

const SessionTable: FC<SessionTableProps> = ({ loading, rows }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const battletagId = useAppSelector(selectBattletagId);
    const session = useAppSelector(selectModalItem) as Session;
    const dispatch = useAppDispatch();

    const handleCloseModal = () => {
        setModalOpen(false)
    }

    const handleSelectSession = () => {
        dispatch(setSelectedSession(session))
        dispatch(resetModalItem())
        setModalOpen(false);
    }

    return (
        <Box>
            <DataGrid
                autoHeight
                loading={loading}
                columns={sessionTableColumnHandler({ setModalOpen, battletagId })}
                rows={rows}
            />
            <Modal title={"Session"} open={modalOpen} onClose={() => setModalOpen(false)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant={"body1"}>
                            Do you want to select this session with the name of <b>{session.name}?</b>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography fontStyle={"italic"} variant={"caption"}>
                            When a session is selected, you may begin adding or editing games in this session.
                        </Typography>
                    </Grid>
                    <Grid container justifyContent={"flex-end"} spacing={2} item xs={12}>
                        <Grid item xs={3}>
                            <Button variant={"text"} onClick={handleSelectSession}>
                                Submit
                            </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant={"text"} color={"error"} onClick={handleCloseModal}>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Modal>
        </Box>
    )
};

export default SessionTable;