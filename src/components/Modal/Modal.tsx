import { Box, Divider, Grid, Modal as MuiModal, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import useStyles from "./Modal.styles";
import StockModalButtons from "./StockModalButtons/StockModalButtons";

interface ModalProps {
    title: string
    children?: ReactNode
    open: boolean
    stockSubmitButtons?: boolean
    onClose: () => void
}

const Modal: FC<ModalProps> = ({ title, children, open, onClose, stockSubmitButtons = false }) => {
    const { classes } = useStyles();

    return (
        <MuiModal open={open} onClose={onClose}>
            <Box p={4} border={2} className={classes.modal} >
                <Grid spacing={2} container alignContent={"space-between"}>
                    <Grid container spacing={2} item xs={12}>
                        <Grid item xs={12}>
                            <Typography variant={"h4"}>
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        {children}
                    </Grid>
                    {stockSubmitButtons &&
                        <Grid item xs={12}>
                            <StockModalButtons closeAction={onClose} />
                        </Grid>}
                </Grid>
            </Box>
        </MuiModal>
    )
}

export default Modal;