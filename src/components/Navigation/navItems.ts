import AddGamePage from "../../pages/AddGame/AddGame.page";
import CallbackPage from "../../pages/Callback/Callback.page";
import DashboardPage from "../../pages/Dashboard/Dashboard.page";
import HomePage from "../../pages/Home/Home";
import SessionPage from "../../pages/Session/Session.page";
import MenuItem from "../../types/MenuItem";

export const sessionSubItems: Omit<MenuItem, "subItems">[] = [
    {
        name: "Add Game",
        to: "session/:id/add-game",
        Page: AddGamePage,
    },
];

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
    {
        name: "Session",
        to: "/session/:id",
        Page: SessionPage,
        subItems: sessionSubItems
    },
];

export default navItems;
