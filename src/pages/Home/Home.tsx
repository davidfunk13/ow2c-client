import { Typography } from "@mui/material";
import { FC } from "react";
import ViewProvider from "../../components/ViewProvider/ViewProvider";
import breadcrumbs from "./Home.page.breadcrumbs";

interface HomePageProps { };

const HomePage: FC<HomePageProps> = () => {
    return (

        <ViewProvider heading={"Home"} breadcrumbs={breadcrumbs}>
            <Typography>{"Yo"}</Typography>
        </ViewProvider>
    );
};
export default HomePage;
