import { ThemeOptions } from "@mui/material";
import { grey } from "@mui/material/colors";
import { componentsSettings } from "./componentsSettings";
import { typographySettings } from "./typographySettings";

export const lightThemeOptions: ThemeOptions = {
    palette: {
        mode: "light",
        primary: { main: "#405275", },
        secondary: { main: "#f50057", },
        background: {
            default: grey[300],
            paper: grey[200],
        },
    },
    components: { ...componentsSettings },
    typography: { ...typographySettings },
};
