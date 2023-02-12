import { AppBar, Button, IconButton, Paper, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetBattletagSlice, selectBattletagName } from "../../redux/slices/battletagSlice";
import { theme } from "../../theme/theme";
import useStyles from "./Navbar.styles";
import MenuIcon from '@mui/icons-material/Menu';
import authURI from "../../utils/authURI";
import { useLogoutMutation } from "../../redux/services/authApi";
import { setSuccessSnackbar } from "../../redux/slices/notificationsSlice";
import Ow2Icon from "../Ow2IconSVG";
import { Box } from "@mui/system";
import { selectDrawerOpen, setDrawerOpen } from "../../redux/slices/drawerSlice";
import { Login } from "@mui/icons-material";
import { resetSessionSlice, selectSession } from "../../redux/slices/sessionSlice";

interface NavBarProps { }

const Navbar: FC<NavBarProps> = () => {
    const { classes, cx } = useStyles();
    const hideLogoBreakpoint = useMediaQuery(theme.breakpoints.up("sm"));
    const desktopMenuBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
    const battletagName = useAppSelector(selectBattletagName);
    const session = useAppSelector(selectSession);
    const showHamburger = !desktopMenuBreakpoint && battletagName;
    const [performLogout, result] = useLogoutMutation();
    const open = useAppSelector(selectDrawerOpen);
    const dispatch = useAppDispatch();

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
    }, [result.data]);

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
                {hideLogoBreakpoint &&
                    <Ow2Icon className={classes.icon} aria-label={"Overwatch 2 Icon"} />
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
                {battletagName &&
                    <Typography px={1} mr={2} component={Paper}>
                        {battletagName}
                    </Typography>
                }
                {session &&
                    <Typography whiteSpace={"pre"} px={1} mr={2} component={Paper}>
                        {session.name}
                    </Typography>
                }

                {/* Login and Logout Buttons */}
                {battletagName ? <LogoutButton /> : <LoginButton />}

            </Toolbar>
        </AppBar>
    );
}

export default Navbar;