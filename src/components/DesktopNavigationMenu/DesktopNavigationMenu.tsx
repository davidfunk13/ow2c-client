import { Drawer, Toolbar, BoxProps } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import Navigation from "../Navigation/Navigation";
import useStyles from "./DesktopNavigationMenu.styles";

interface IDesktopNavigationMenu { }

const DesktopNavigationMenu: FC<IDesktopNavigationMenu & BoxProps> = () => {
    const { classes } = useStyles();

    return (
        <Drawer variant={"permanent"} className={classes.drawer}>
            <Toolbar />
            <Box className={classes.navListOverFlow}>
                <Navigation />
            </Box>
        </Drawer>
    );
};

export default DesktopNavigationMenu;