import { AppBar, Box, Button, IconButton, Paper, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetBattletagSlice, selectBattletagName } from "../../redux/slices/battletagSlice";
import useStyles from "./Navbar.styles";
import MenuIcon from "@mui/icons-material/Menu";
import authURI from "../../utils/authURI";
import { useLogoutMutation } from "../../redux/services/authApi";
import { setSuccessSnackbar } from "../../redux/slices/notificationsSlice";
import Ow2Icon from "../CustomIcons/Ow2IconSVG";
import Ow2IconDark from "../CustomIcons/Ow2IconSVGDark";
import { selectDrawerOpen, setDrawerOpen } from "../NavigationDrawer/navigationDrawerSlice";
import { resetSessionSlice, selectSession } from "../../redux/slices/sessionSlice";
import { selectTheme, setTheme } from "../../redux/slices/themeSlice";
import { DarkMode, LightMode } from "@mui/icons-material";
import { parseTheme } from "../../providers/MuiThemeProvider/MuiThemeProvider";

interface NavBarProps { }

const Navbar: FC<NavBarProps> = () => {
    const { classes, cx } = useStyles();
    const theme = useAppSelector(selectTheme);
    const currentTheme = parseTheme(theme);
    const hideLogoBreakpoint = useMediaQuery(currentTheme.breakpoints.up("sm"));
    const desktopMenuBreakpoint = useMediaQuery(currentTheme.breakpoints.up("md"));
    const battletagName = useAppSelector(selectBattletagName);
    const session = useAppSelector(selectSession);
    const showHamburger = !desktopMenuBreakpoint && battletagName;
    const [performLogout, result] = useLogoutMutation();
    const open = useAppSelector(selectDrawerOpen);
    const dispatch = useAppDispatch();
    const appTheme = useAppSelector(selectTheme);

    const handleDrawerToggle = () => {
        dispatch(setDrawerOpen(!open));
    };

    const logout = () => {
        dispatch(resetBattletagSlice());
        dispatch(resetSessionSlice());
        performLogout(null);
    };

    useEffect(() => {
        if (result.data) {
            dispatch(setSuccessSnackbar(result.data.message));
        }
    }, [dispatch, result.data]);

    const LoginButton: FC<{}> = () => {
        return <Button
            aria-label={"Login Button"}
            color={"inherit"}
            variant={"outlined"}
            href={authURI.toString()}
            title={"Login"}
        >
            {"Login"}
        </Button>;
    };

    const LogoutButton: FC<{}> = () => {
        return <Button
            aria-label={"Logout Button"}
            color={"inherit"}
            variant={"outlined"}
            title={"Logout"}
            onClick={() => logout()}
        >
            {"Logout"}
        </Button>;
    };

    return (
        <AppBar className={cx({ [classes.appBar]: desktopMenuBreakpoint })} >
            <Toolbar>

                {/* only show if authed and we're not on "desktop" */}
                {showHamburger &&
                    <IconButton
                        edge={"start"}
                        color={"inherit"}
                        aria-label={"open drawer"}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                }

                {/* we cant fit all this shit on mobile */}
                {hideLogoBreakpoint ?
                    theme === "light" ?
                        <Ow2Icon className={classes.icon} aria-label={"Overwatch 2 Icon"} /> :
                        <Ow2IconDark className={classes.icon} aria-label={"Overwatch 2 Icon Dark Mode"} /> : null
                }

                {/* Title */}
                <Typography
                    noWrap
                    flexGrow={1}
                    aria-label={"app-title"}
                    variant={"h6"}
                >
                    {"Overwatch Companion"}
                </Typography>

                {/* Battletag */}
                {battletagName ?
                    <Typography px={1} mr={2} component={Paper}>
                        {battletagName}
                    </Typography> : undefined
                }
                {session ?
                    <Typography whiteSpace={"pre"} px={1} mr={2} >
                        {session.name}
                    </Typography> : undefined
                }

                {/* Login and Logout Buttons */}
                {battletagName ? <LogoutButton /> : <LoginButton />}
                <Box pl={2}>
                    <IconButton color={"warning"} onClick={() => dispatch(setTheme(appTheme === "light" ? "dark" : "light"))}>
                        {appTheme === "light" ? <LightMode /> : <DarkMode />}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
