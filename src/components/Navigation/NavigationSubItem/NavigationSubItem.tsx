import { StarBorder } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { Dispatch, FC, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { setDrawerOpen } from "../../NavigationDrawer/navigationDrawerSlice";

interface NavigationSubItemProps {
    to: string
    text: string
    setParentOpen?: Dispatch<SetStateAction<boolean>>
}

const NavigationSubItem: FC<NavigationSubItemProps> = ({ text, to, setParentOpen }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const link = () => {
        if (setParentOpen) {
            setParentOpen(false);
        }

        dispatch(setDrawerOpen(false));
        to && navigate(to);
    };

    return (
        <ListItemButton component={ListItemButton} onClick={() => link()} sx={{ pl: 4 }}>
            <ListItemIcon>
                <StarBorder />
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItemButton>
    );
};

export default NavigationSubItem;
