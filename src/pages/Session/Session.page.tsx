import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider";
import { useAppSelector } from "../../redux/hooks";
import { selectSession } from "../../redux/slices/sessionSlice";
import breadcrumbs from "./Session.page.breadcrumbs";
import useStyles from "./Session.styles";

interface SessionPageProps { }

const SessionPage: FC<SessionPageProps> = () => {

    const session = useAppSelector(selectSession);

    const { classes } = useStyles();

    return (
        <ViewProvider heading={"Session"} breadcrumbs={breadcrumbs(session.id)}>

        </ViewProvider>
    );
}

export default SessionPage;