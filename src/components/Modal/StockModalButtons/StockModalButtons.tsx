import { Button, Grid } from "@mui/material";
import { FC } from "react";

interface StockModalButtonsProps {
    closeAction: () => void
}

const StockModalButtons: FC<StockModalButtonsProps> = ({ closeAction }) => {

    const test = {
        item: "",
        test: ""
    };

    return (
        <Grid container justifyContent={"flex-end"}>
            <Grid item xs={3}>
                <Button variant={"text"} type={"submit"}>
                    {"Submit"}
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant={"text"} color={"error"} onClick={() => closeAction()}>
                    {"Cancel"}
                </Button>
            </Grid>
        </Grid>
    );
};

export default StockModalButtons;
