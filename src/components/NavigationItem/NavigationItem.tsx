import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { Box, Collapse, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { setDrawerOpen } from "../../redux/slices/drawerSlice";
import MenuItem from "../../types/MenuItem";

interface INavigationItem {
    name: MenuItem["name"],
    IconComponent?: MenuItem["IconComponent"]
    to?: MenuItem["to"]
    subItems?: MenuItem["subItems"]
}

const NavigationItem: FC<INavigationItem> = ({ name, IconComponent, to, subItems = [] }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const link = () => {
        to && navigate(to);
        dispatch(setDrawerOpen(false));
    };

    function toggleOpen(e: SyntheticEvent) {
        e.preventDefault();
        e.stopPropagation();
        setOpen(!open);
    }

    return (
        <>
            <ListItem component={ListItemButton} onClick={link}>
                {IconComponent && <ListItemIcon><IconComponent /> </ListItemIcon>}
                <ListItemText primary={name} />
                {subItems.length > 0 &&
                    <IconButton onClick={toggleOpen}>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                }
            </ListItem>
            {console.log(subItems)}
            {subItems.length > 0 &&
                <Collapse in={open} timeout={"auto"} unmountOnExit>
                    <List component={"div"} disablePadding>
                        {subItems.map(({ name, to }) => {
                            const link = () => {
                                setOpen(false);
                                dispatch(setDrawerOpen(false));
                                to && navigate(to);
                            };

                            return (
                                <ListItemButton key={`${name}-sub-item`} component={ListItemButton} onClick={link} sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary={name} />
                                </ListItemButton>
                            );
                        })}
                    </List>
                </Collapse>
            }
        </>

    );
};

export default NavigationItem;