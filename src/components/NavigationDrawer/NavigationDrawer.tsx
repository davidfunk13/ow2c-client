import { Divider, Drawer, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectDrawerOpen, setDrawerOpen } from "./navigationDrawerSlice";
import Navigation from "../Navigation/Navigation";

interface NavigationDrawerProps { }

const NavigationDrawer: FC<NavigationDrawerProps> = () => {
    const drawerOpen = useAppSelector(selectDrawerOpen);
    const dispatch = useAppDispatch();
    const handleDrawerToggle = () => dispatch(setDrawerOpen(!drawerOpen));
    const modalProps = { keepMounted: true }; // Better open performance on mobile.

    useEffect(() => {
        return () => {
            dispatch(setDrawerOpen(false));
        };
    }, [dispatch]);

    return (
        <Box component={"nav"}>
            <Drawer
                variant={"temporary"}
                open={drawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={modalProps}
            >
                <Typography variant={"h5"} m={2}>
                    {"Overwatch Companion"}
                </Typography>
                <Divider />
                <Navigation />
            </Drawer>
        </Box>
    );
};

export default NavigationDrawer;
