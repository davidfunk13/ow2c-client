import { FC } from "react";
import ViewProvider from "../../components/ViewProvider/ViewProvider";
import breadcrumbs from "./Dashboard.page.breadcrumbs";

interface DashboardPageProps { }

const DashboardPage: FC<DashboardPageProps> = () => {

    return (
        <ViewProvider heading={"Dashboard"} breadcrumbs={breadcrumbs}>
       
        </ViewProvider >
    );
};

export default DashboardPage;
