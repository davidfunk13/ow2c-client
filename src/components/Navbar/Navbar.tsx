import { AppBar, Grid, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectBattletagName } from "../../redux/slices/battletagSlice";
import useStyles from "./Navbar.styles";
import { selectTheme } from "../../redux/slices/themeSlice";
import { parseTheme } from "../../providers/MuiThemeProvider/MuiThemeProvider";
import RenderHamburger from "./components/RenderHamburger/RenderHamburger";
import RenderIcon from "./components/RenderIcon/RenderIcon";
import AuthButton from "./components/AuthButton/AuthButton";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

interface NavBarProps { }

const Navbar: FC<NavBarProps> = (): JSX.Element => {
    const { classes, cx } = useStyles();
    const theme = useAppSelector(selectTheme);
    const currentTheme = parseTheme(theme);
    const desktopMenuBreakpoint = useMediaQuery(currentTheme.breakpoints.up("md"));
    const battletagName = useAppSelector(selectBattletagName);

    return (
        <AppBar className={cx({ [classes.appBar]: desktopMenuBreakpoint })} >
            <Toolbar>
                <Grid container justifyContent={"space-between"}>
                    {/* only show if authed and we're not on "desktop" */}
                    <RenderHamburger />
                    
                    {/* we cant fit all this shit on mobile */}
                    <RenderIcon />
                    
                    {/* Title */}
                    <Grid container item xs={"auto"} alignItems={"center"}>
                        <Typography
                            noWrap
                            flexGrow={1}
                            aria-label={"app-title"}
                            variant={"h6"}
                        >
                            {"Overwatch Companion"}
                        </Typography>
                    </Grid>

                    {/* Login and Logout Buttons */}
                    <Grid container item xs={"auto"} alignItems={"center"}>
                        <AuthButton />
                    </Grid>

                    {battletagName ?
                        <Grid container item xs={"auto"} alignItems={"center"}>
                            <ThemeToggle />
                        </Grid> : null
                    }
                    
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
