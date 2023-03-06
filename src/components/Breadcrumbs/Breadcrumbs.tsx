import { FC, ReactElement } from "react";
import { Breadcrumbs as MUIBreadcrumbs, Button, Link } from "@mui/material";
import Crumb from "./Crumb/Crumb";
import Breadcrumb from "../../types/Breadcrumb";

interface BreadcrumbProps {
    breadcrumbs: Breadcrumb[];
}

const Breadcrumbs: FC<BreadcrumbProps> = ({ breadcrumbs }): ReactElement => {
    return (
        <MUIBreadcrumbs aria-label={"breadcrumbs"}>
            <Button LinkComponent={Link} href={"/"}>
                {"Home"}
            </Button>
            {breadcrumbs.map((crumb, i) =>
                <Crumb key={`${i}-${crumb.name}`} breadcrumb={crumb} />
            )}
        </MUIBreadcrumbs>
    );
};

export default Breadcrumbs;
