import { Grid, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import useStyles from "./ViewProvider.styles";
import clsx from "clsx";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Snackbar from "../Snackbar/Snackbar";
import { useAppSelector } from "../../redux/hooks";
import Breadcrumb from "../../types/Breadcrumb";
import { selectBattletagName } from "../../redux/slices/battletagSlice";
import { selectTheme } from "../../redux/slices/themeSlice";
import { parseTheme } from "../../providers/MuiThemeProvider/MuiThemeProvider";
import UserBox from "../UserBox/UserBox";

interface ViewProviderProps {
    children: ReactNode
    breadcrumbs?: Breadcrumb[]
    heading: string
}

const ViewProvider: FC<ViewProviderProps> = ({ children, heading, breadcrumbs = [] }: ViewProviderProps): JSX.Element => {
    const location = useLocation();
    const theme = useAppSelector(selectTheme);
    const currentTheme = parseTheme(theme);
    const desktopBreakpoint = useMediaQuery(currentTheme.breakpoints.up("md"));
    const { classes } = useStyles();
    const battletagName = useAppSelector(selectBattletagName);

    return (
        <Box component={"main"} className={clsx(desktopBreakpoint && battletagName ? classes.desktopContainer : classes.mobileContainer)}>
            
            {/* padding on view that nudges content below navbar. */}
            <Toolbar />

            {/* contains nametag and session tag */}
            <UserBox />

            <Grid container>
                <Grid item xs={12}>
                    <Typography variant={"h1"}>
                        {heading}
                    </Typography>
                </Grid>

                {/* if we're not @ root, show breadcrumbs. */}
                {!(location.pathname === "/") && !!breadcrumbs.length &&
                    <Grid className={desktopBreakpoint ? undefined : classes.breadcrumbPadding} item xs={12}>
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </Grid>
                }

                {/* content */}
                <Grid paddingTop={5} container item xs={12}>
                    {children}
                </Grid>
            </Grid>

            <Snackbar />
        </Box>
    );
};

export default ViewProvider;
