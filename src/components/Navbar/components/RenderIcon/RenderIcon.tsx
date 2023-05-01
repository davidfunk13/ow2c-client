import { Grid, useMediaQuery } from "@mui/material";
import Ow2IconSVG from "../../../CustomIcons/Ow2IconSVG";
import Ow2IconSVGDark from "../../../CustomIcons/Ow2IconSVGDark";
import { useAppSelector } from "../../../../redux/hooks";
import { FC } from "react";
import { selectTheme } from "../../../../redux/slices/themeSlice";
import useStyles from "./RenderIcon.styles";
import { parseTheme } from "../../../../providers/MuiThemeProvider/MuiThemeProvider";

const RenderIcon: FC = () => {
    const theme = useAppSelector(selectTheme);
    const currentTheme = parseTheme(theme);
    const { classes } = useStyles();

    const hideLogoBreakpoint = useMediaQuery(currentTheme.breakpoints.up("sm"));
    
    return hideLogoBreakpoint ?
        <Grid container item xs={"auto"} alignItems={"center"}>
            {theme === "light" ? (
                <Ow2IconSVG className={classes.icon} aria-label={"Overwatch 2 Icon"} />
            ) : (
                <Ow2IconSVGDark className={classes.icon} aria-label={"Overwatch 2 Icon Dark Mode"} />
            )}
        </Grid> : null;
};

export default RenderIcon;
