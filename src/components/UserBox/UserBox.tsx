import { Grid } from "@mui/material";
import { FC } from "react";
import Nametag from "./components/NameTag/NameTag";

const UserBox: FC = (): JSX.Element => {
    return (
        <Grid container justifyContent={"flex-end"} spacing={2} alignItems={"center"}>
            <Nametag />
        </Grid>
    );
};

export default UserBox;
