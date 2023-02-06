import { FC, ReactNode, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import selectedTheme from "../../utils/selectedTheme";

interface MuiThemeProviderProps {
    children: ReactNode
}

const MuiThemeProvider: FC<MuiThemeProviderProps> = ({ children }) => {
    const [dark, setDark] = useState(false);
    return (
        <ThemeProvider theme={selectedTheme(dark)}>
            {children}
        </ThemeProvider>
    );
};

export default MuiThemeProvider;