import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Dispatch, FC, ReactElement, SetStateAction, SyntheticEvent, } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { setDrawerOpen } from "../../NavigationDrawer/navigationDrawerSlice";
import MenuItem from "../../../types/MenuItem";

interface INavigationItem {
    name: MenuItem["name"],
    open?: boolean,
    setOpen?: Dispatch<SetStateAction<boolean>>
    IconComponent?: MenuItem["IconComponent"]
    to?: MenuItem["to"]
    children?: ReactElement<INavigationItem> | Array<ReactElement<INavigationItem>>;
}

const NavigationItem: FC<INavigationItem> = ({ name, children, IconComponent, to, open, setOpen }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const link = () => {
        if (setOpen) {
            setOpen(false);
        }

        to && navigate(to);
        dispatch(setDrawerOpen(false));
    };

    function toggleOpen(e: SyntheticEvent) {
        e.preventDefault();
        e.stopPropagation();
        if (setOpen) {
            setOpen(!open);
        }
    }

    return (
        <>
            <ListItem component={ListItemButton} onClick={link}>
                {IconComponent && <ListItemIcon><IconComponent /> </ListItemIcon>}
                <ListItemText primary={name} />
                {children &&
                    <IconButton onClick={toggleOpen}>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                }
            </ListItem>
            {children &&
                <Collapse in={open} timeout={"auto"} unmountOnExit>
                    {children}
                </Collapse>
            }

        </>

    );
};

export default NavigationItem;
