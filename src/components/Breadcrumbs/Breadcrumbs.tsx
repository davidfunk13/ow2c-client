import { FC, ReactElement } from "react";
import { Breadcrumbs as MUIBreadcrumbs } from "@mui/material";
import { NavLink } from "react-router-dom";
import Crumb from "./Crumb/Crumb";
import Breadcrumb from "../../types/Breadcrumb";

interface BreadcrumbProps {
    breadcrumbs: Breadcrumb[];
}

const Breadcrumbs: FC<BreadcrumbProps> = ({ breadcrumbs }): ReactElement => {
    return (
        <MUIBreadcrumbs aria-label={"breadcrumbs"}>
            <NavLink to={"/"} aria-label={"home-breadcrumb-link"}>
                {"Home"}
            </NavLink>
            {breadcrumbs.map((crumb, i) =>
                <Crumb key={`${i}-${crumb.name}`} breadcrumb={crumb} />
            )}
        </MUIBreadcrumbs>
    );
};

export default Breadcrumbs;