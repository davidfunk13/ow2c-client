import { Grid } from "@mui/material";
import { FC } from "react";
import Nametag from "./components/NameTag/NameTag";
import SessionTag from "./components/SessionTag/SessionTag";

const UserBox: FC = (): JSX.Element => {
    return (
        <Grid container justifyContent={"flex-end"} spacing={2} alignItems={"center"}>
            <Nametag />
            <SessionTag />
        </Grid>
    );
};

export default UserBox;
