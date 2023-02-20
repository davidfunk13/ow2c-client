import { List } from "@mui/material";
import { FC } from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import { Home as HomeIcon } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useAppSelector } from "../../redux/hooks";
import { selectSession } from "../../redux/slices/sessionSlice";
import { sessionSubItems } from "./navItems";
// import { dashboardSubItems } from "./navItems";

interface INavigation { }

const Navigation: FC<INavigation> = () => {
    const session = useAppSelector(selectSession);
    console.log({ session })
    return (
        <List>
            <NavigationItem
                key={"nav-item-home"}
                aria-label={"Home Navgation Link"}
                to={"/"}
                name={"Home"}
                IconComponent={HomeIcon}
            />
            <NavigationItem
                key={"nav-item-dashboard"}
                aria-label={"Dashboard Navgation Link"}
                to={"/dashboard"}
                name={"Dashboard"}
                // subItems={dashboardSubItems}
                IconComponent={DashboardIcon}
            />

            {session &&
                <NavigationItem
                    key={"nav-item-session"}
                    aria-label={"Session Navigation Link"}
                    to={`/session/${session.id}`}
                    name={"Session"}
                    subItems={sessionSubItems}
                    IconComponent={DashboardIcon}
                />
            }
        </List>
    );
};

export default Navigation;