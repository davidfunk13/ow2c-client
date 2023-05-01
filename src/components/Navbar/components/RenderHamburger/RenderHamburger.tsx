import { Grid, IconButton, useMediaQuery } from "@mui/material";
import { GridMenuIcon } from "@mui/x-data-grid";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { selectDrawerOpen, setDrawerOpen } from "../../../NavigationDrawer/navigationDrawerSlice";
import { parseTheme } from "../../../../providers/MuiThemeProvider/MuiThemeProvider";
import { selectTheme } from "../../../../redux/slices/themeSlice";
import { selectBattletagName } from "../../../../redux/slices/battletagSlice";
import { FC } from "react";

const RenderHamburger: FC = () => {
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();
    const open = useAppSelector(selectDrawerOpen);
    const currentTheme = parseTheme(theme);
    const desktopMenuBreakpoint = useMediaQuery(currentTheme.breakpoints.up("md"));

    const battletagName = useAppSelector(selectBattletagName);

    const showHamburger = !desktopMenuBreakpoint && battletagName;

    const handleDrawerToggle = () => {
        dispatch(setDrawerOpen(!open));
    };

    return showHamburger ? (
        <Grid container item xs={"auto"} alignItems={"center"}>
            <IconButton
                edge={"start"}
                color={"inherit"}
                aria-label={"open drawer"}
                onClick={handleDrawerToggle}
            >
                <GridMenuIcon />
            </IconButton>
        </Grid>
    ) : null;
};

export default RenderHamburger;
