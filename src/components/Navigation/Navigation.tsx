import { List } from "@mui/material";
import { FC } from "react";
import { Home as HomeIcon } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NavigationItem from "./NavigationItem/NavigationItem";

interface INavigation { }

const Navigation: FC<INavigation> = () => {
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
                IconComponent={DashboardIcon}
            />
        </List>
    );
};

export default Navigation;
