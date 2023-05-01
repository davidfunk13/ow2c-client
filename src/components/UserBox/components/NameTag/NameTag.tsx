import { FC } from "react";
import { selectBattletagName } from "../../../../redux/slices/battletagSlice";
import { useAppSelector } from "../../../../redux/hooks";
import { Grid, Paper, Typography } from "@mui/material";

interface NameTagProps { }

const NameTag: FC<NameTagProps> = (): JSX.Element | null => {
    const battletagName = useAppSelector(selectBattletagName);

    return battletagName ? (
        <Grid container item xs={"auto"} alignItems={"center"}>
            <Typography fontSize={"small"} px={.5} component={Paper}>
                {battletagName}
            </Typography>
        </Grid>
    ) : null;
};

export default NameTag;
