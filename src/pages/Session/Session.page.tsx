import Spreadsheet, { DataViewer, Point, TableComponent } from "react-spreadsheet";
import { FC } from "react";
import ViewProvider from "../../components/ViewProvider/ViewProvider";
import { useAppSelector } from "../../redux/hooks";
import { selectSession } from "../../redux/slices/sessionSlice";
import breadcrumbs from "./Session.page.breadcrumbs";
import { Box, Grid, Typography } from "@mui/material";
import ItemBox from "../../components/ItemBox/ItemBox";
import { useGetGamesQuery } from "../../redux/services/gameApi";
import { selectBattletagId } from "../../redux/slices/battletagSlice";
import { DataGrid } from "@mui/x-data-grid";
import GameSpreadsheet from "../../components/GameSpreadsheet/GameSpreadsheet";

interface SessionPageProps { }

const SessionPage: FC<SessionPageProps> = () => {
    const shit = [
        [{ value: "Vanilla" }, { value: "Chocolate" }],
        [{ value: "Strawberry" }, { value: "Cookies" }],
    ];

    const session = useAppSelector(selectSession);
    const battletagId = useAppSelector(selectBattletagId);

    const { data = [], isLoading } = useGetGamesQuery({
        battletagId: battletagId,
        sessionId: session?.id ?? ""
    }, { skip: !battletagId || !session?.id });

    return (
        <ViewProvider heading={"Session"} breadcrumbs={breadcrumbs(session?.id ?? "")}>
            <Grid item xs={12}>
                <GameSpreadsheet />
            </Grid>
        </ViewProvider>
    );
};

export default SessionPage;
