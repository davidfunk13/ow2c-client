import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider";
import { useAppSelector } from "../../redux/hooks";
import { selectSession } from "../../redux/slices/sessionSlice";
import breadcrumbs from "./Session.page.breadcrumbs";

interface SessionPageProps { }

const SessionPage: FC<SessionPageProps> = () => {

    const session = useAppSelector(selectSession);

    return (
        <ViewProvider heading={"Session"} breadcrumbs={breadcrumbs(session.id)}>

        </ViewProvider>
    );
};

export default SessionPage;
