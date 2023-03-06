import { Typography } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../../../types/Breadcrumb";
import useStyles from "./Crumb.styles";

interface CrumbProps {
    breadcrumb: Breadcrumb
}

const Crumb: FC<CrumbProps> = ({ breadcrumb }) => {
    const { name, linkPath, bold } = breadcrumb;

    const { classes } = useStyles({ isBold: bold! });

    const to = linkPath ?? "";

    return (
        <Typography
            className={classes.makeBold}
            aria-label={`${name}-breadcrumb-text`}
            component={NavLink}
            to={to}
        >
            {name}
        </Typography>
    );
};

export default Crumb;
