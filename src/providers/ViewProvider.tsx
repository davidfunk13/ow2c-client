import { Grid, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { theme } from "../theme/theme";
import Breadcrumb from "../types/Breadcrumb";
import useStyles from "./ViewProvider.styles";
import clsx from 'clsx';
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Snackbar from "../components/Snackbar/Snackbar";

interface ViewProviderProps {
    children: ReactNode
    breadcrumbs?: Breadcrumb[]
    heading: string
}

const ViewProvider: FC<ViewProviderProps> = ({ children, heading, breadcrumbs = [] }: ViewProviderProps) => {
    const location = useLocation();
    const desktopBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
    // const isAuthenticated = useAppSelector(selectIsAuthenticated);
    const { classes } = useStyles();

    return (
        //desktopBreakpoint && isAuthenticated
        <Box component={"main"} className={clsx(desktopBreakpoint 
            // && isAuthenticated 
        ? classes.desktopContainer : classes.mobileContainer)}>
            {/* padding on view that nudges content below navbar. */}
            <Toolbar />

            <Grid container spacing={2}>
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
                <Grid container item xs={12}>
                    {children}
                </Grid>
            </Grid>
   
            <Snackbar />
        </Box>
    );
};

export default ViewProvider;