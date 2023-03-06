import { Box, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { FC, ReactNode } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { resetModal } from "./modalSlice";
import StockModalButtons from "./StockModalButtons/StockModalButtons";

interface ModalProps {
    title: string
    children?: ReactNode
    open: boolean
    modalButtons?: () => JSX.Element
    stockButtons?: boolean
}

const Modal: FC<ModalProps> = ({ title, children, open, modalButtons, stockButtons }) => {
    const dispatch = useAppDispatch();

    return (
        <Dialog open={open} onClose={() => dispatch(resetModal())}>
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
                {stockButtons ?
                    <Box pt={1}>
                        <DialogActions>
                            <StockModalButtons />
                        </DialogActions>
                    </Box>
                    : undefined
                }
                {modalButtons ?
                    <Box pt={1}>
                        <DialogActions>
                            {modalButtons()}
                        </DialogActions>
                    </Box>
                    : undefined
                }
            </DialogContent>
        </Dialog>
    );
};

export default Modal;
