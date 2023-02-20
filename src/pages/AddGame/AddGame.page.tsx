import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider";
import { useAppSelector } from "../../redux/hooks";
import { selectSession } from "../../redux/slices/sessionSlice";
import breadcrumbs from "./AddGame.page.breadcrumbs";
import useStyles from "./AddGame.styles";

interface AddGamePageProps { }

const AddGamePage: FC<AddGamePageProps> = () => {
const session = useAppSelector(selectSession);
    return (
        <ViewProvider heading={"Add Game"} breadcrumbs={breadcrumbs(String(session.id))}>

        </ViewProvider>
    );
}

export default AddGamePage;