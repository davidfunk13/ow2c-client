import { Grid, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import useStyles from "./ViewProvider.styles";
import clsx from "clsx";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Snackbar from "../components/Snackbar/Snackbar";
import { useAppSelector } from "../redux/hooks";
import Breadcrumb from "../types/Breadcrumb";
import { theme } from "../theme/theme";
import { selectBattletagName } from "../redux/slices/battletagSlice";

interface ViewProviderProps {
    children: ReactNode
    breadcrumbs?: Breadcrumb[]
    heading: string
}

const ViewProvider: FC<ViewProviderProps> = ({ children, heading, breadcrumbs = [] }: ViewProviderProps) => {
    const location = useLocation();
    const desktopBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
    const { classes } = useStyles();
    const battletagName = useAppSelector(selectBattletagName);
    return (
        <Box component={"main"} className={clsx(desktopBreakpoint && battletagName ? classes.desktopContainer : classes.mobileContainer)}>
            {/* padding on view that nudges content below navbar. */}
            <Toolbar />

            <Grid container>
                <Grid item xs={12}>
                    <Typography variant={"h1"}>
                        {heading}
                    </Typography>
                </Grid>

                {/* if we're not @ root, show breadcrumbs. */}
                {!(location.pathname === "/") && !!breadcrumbs.length &&
                    <Grid className={classes.breadcrumbPadding} item xs={12}>
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