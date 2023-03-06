import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { FC } from "react";

interface MenuItem {
    name: string,
    IconComponent?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; }
    to: string
    Page: FC
    subItems?: Omit<MenuItem, "subItems">[]
}

export default MenuItem;
