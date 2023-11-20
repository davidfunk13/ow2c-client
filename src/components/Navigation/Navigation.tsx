import { List } from "@mui/material";
import { FC, useState } from "react";
import { Home as HomeIcon } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useAppSelector } from "../../redux/hooks";
import { selectSession } from "../../redux/slices/sessionSlice";
import NavigationItem from "./NavigationItem/NavigationItem";
import NavigationSubItem from "./NavigationSubItem/NavigationSubItem";

interface INavigation { }

const Navigation: FC<INavigation> = () => {
    const session = useAppSelector(selectSession);
    const [sessionNavOpen, setSessionNavOpen] = useState(false);

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
            {session &&
                <NavigationItem
                    open={sessionNavOpen}
                    setOpen={setSessionNavOpen}
                    key={"nav-item-session"}
                    aria-label={"Session Navigation Link"}
                    to={`/session/${session.id}`}
                    name={"Session"}
                    IconComponent={DashboardIcon}
                >
                </NavigationItem>
            }
        </List>
    );
};

export default Navigation;
