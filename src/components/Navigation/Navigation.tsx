import { Button, List } from "@mui/material";
import { FC, useState } from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import { Home as HomeIcon } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useAppSelector } from "../../redux/hooks";
import { selectSession } from "../../redux/slices/sessionSlice";
import { sessionSubItems } from "./navItems";
import NavigationSubItem from "../NavigationSubItem/NavigationSubItem";

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
                    <List>
                        <NavigationSubItem text={"Add Game"} to={`/session/${session.id}/add-game`} />
                    </List>
                </NavigationItem>
            }
        </List>
    );
};

export default Navigation;