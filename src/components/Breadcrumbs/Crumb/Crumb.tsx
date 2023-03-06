import { Button, Link } from "@mui/material";
import { FC } from "react";
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
        <Button className={classes.makeBold} LinkComponent={Link} href={to}>
            {name}
        </Button>
    );
};

export default Crumb;
