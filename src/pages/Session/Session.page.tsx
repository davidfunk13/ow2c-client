import { FC } from "react";
import ViewProvider from "../../components/ViewProvider/ViewProvider";
import { useAppSelector } from "../../redux/hooks";
import { selectSession } from "../../redux/slices/sessionSlice";
import breadcrumbs from "./Session.page.breadcrumbs";
import GameTable from "../../components/GameTable/GameTable";
import { Button, Grid } from "@mui/material";
import ItemBox from "../../components/ItemBox/ItemBox";
import { useGetGamesQuery } from "../../redux/services/gameApi";
import { selectBattletagId } from "../../redux/slices/battletagSlice";
import { useNavigate } from "react-router-dom";

interface SessionPageProps { }

const SessionPage: FC<SessionPageProps> = () => {

    const session = useAppSelector(selectSession);
    const battletagId = useAppSelector(selectBattletagId);
    const navigate = useNavigate();
    
    const { data = [], isLoading } = useGetGamesQuery({
        battletagId: battletagId,
        sessionId: session?.id ?? ""
    }, { skip: !battletagId || !session?.id });

    return (
        <ViewProvider heading={"Session"} breadcrumbs={breadcrumbs(session?.id ?? "")}>
            <Button onClick={()=>navigate(`/session/${session?.id}/add-game`)} >
                {"Add Game"}
            </Button>
            <Grid item xs={12}>
                <ItemBox boxTitle={"Current Games"}>
                    <Grid item xs={12}>
                        <GameTable loading={isLoading} rows={data} />
                    </Grid>
                </ItemBox>
            </Grid>
        </ViewProvider>
    );
};

export default SessionPage;
