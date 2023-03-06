import { Button, Grid } from "@mui/material";
import { FC } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { resetModal } from "../modalSlice";

interface StockModalButtonsProps { }

const StockModalButtons: FC<StockModalButtonsProps> = () => {
    const dispatch = useAppDispatch();

    return (
        <Grid container spacing={2} justifyContent={"flex-end"}>
            <Grid item xs={4}>
                <Button fullWidth variant={"contained"} type={"submit"}>
                    {"Submit"}
                </Button>
            </Grid>
            <Grid item xs={4}>
                <Button fullWidth variant={"contained"} color={"error"} onClick={() => dispatch(resetModal())}>
                    {"Cancel"}
                </Button>
            </Grid>
        </Grid>
    );
};

export default StockModalButtons;
