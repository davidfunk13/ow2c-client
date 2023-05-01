import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { selectTheme, setTheme } from "../../../../redux/slices/themeSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { FC } from "react";

const ThemeToggle: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const appTheme = useAppSelector(selectTheme);
    const toggleTheme = () => appTheme === "light" ? "dark" : "light";

    return (
        <IconButton color={"warning"} size={"small"} onClick={() => dispatch(setTheme(toggleTheme()))}>
            {appTheme === "light" ? <LightMode /> : <DarkMode />}
        </IconButton>
    );
};

export default ThemeToggle;
