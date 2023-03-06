import { ThemeOptions } from "@mui/material";
import { grey } from "@mui/material/colors";
import { componentsSettings } from "./componentsSettings";
import { typographySettings } from "./typographySettings";

export const darkThemeOptions: ThemeOptions = {
    palette: {
        mode: "dark",
        primary: {
            main: "#3f51b5",
            light: "#6573C3",
            dark: "#2C387E",
            contrastText: "#ffffff",
        },
        background: {
            default: grey[900],
            paper: grey[800]
        },
    },
    components: {
        MuiAppBar: { styleOverrides: { colorPrimary: { backgroundColor: grey[900] } } },
        ...componentsSettings,
    },
    typography: { ...typographySettings },
};
