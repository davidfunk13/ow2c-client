import { darkTheme, lightTheme } from "../../theme/theme";
import { FC, ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useAppSelector } from "../../redux/hooks";
import { selectTheme } from "../../redux/slices/themeSlice";
import { AvailableThemes } from "../../types/AvailableThemes";

interface MuiThemeProviderProps {
    children: ReactNode
}

export const parseTheme = (theme: AvailableThemes) => {
    switch (theme) {
        case "light":
            return lightTheme;
        case "dark":
            return darkTheme;
        default:
            return lightTheme;
    }
};

const MuiThemeProvider: FC<MuiThemeProviderProps> = ({ children }) => {
    const theme = useAppSelector(selectTheme);

    return (
        <ThemeProvider theme={parseTheme(theme)}>
            {children}
        </ThemeProvider>
    );
};

export default MuiThemeProvider;
