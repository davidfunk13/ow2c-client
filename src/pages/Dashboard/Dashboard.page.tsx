import { Grid, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import ViewProvider from "../../providers/ViewProvider";
import { useAppSelector } from "../../redux/hooks";
import { useGetSessionsQuery } from "../../redux/services/sessionApi";
import { selectBattletagId } from "../../redux/slices/battletagSlice";
import breadcrumbs from "./Dashboard.page.breadcrumbs";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Session from "../../types/Session";

interface DashboardPageProps { }

const DashboardPage: FC<DashboardPageProps> = () => {

    const battletagId = useAppSelector(selectBattletagId);
    const { data = [], isLoading } = useGetSessionsQuery({ id: battletagId }, { skip: !battletagId });

    return (
        <ViewProvider heading={"Dashboard"} breadcrumbs={breadcrumbs}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4">
                        Current Sessions
                    </Typography>
                    <DataGrid
                        autoHeight
                        loading={isLoading}
                        columns={[{ field: "name", headerName: "Session Name", flex: 1 }]}
                        rows={data}
                    />
                </Grid>
            </Grid>
        </ViewProvider>
    );
}

export default DashboardPage;