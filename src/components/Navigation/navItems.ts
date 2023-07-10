import CallbackPage from "../../pages/Callback/Callback.page";
import DashboardPage from "../../pages/Dashboard/Dashboard.page";
import HomePage from "../../pages/Home/Home";
import MenuItem from "../../types/MenuItem";

const navItems: MenuItem[] = [
    {
        name: "Home",
        to: "/",
        Page: HomePage
    },
    {
        name: "Callback",
        to: "/callback",
        Page: CallbackPage
    },
    {
        name: "Dashboard",
        to: "/dashboard",
        Page: DashboardPage
    },
];

export default navItems;
