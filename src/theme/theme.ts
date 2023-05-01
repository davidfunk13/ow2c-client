import { lightThemeOptions } from "./lightThemeOptions";
import { darkThemeOptions } from "./darkThemeOptions";
import { createTheme, responsiveFontSizes } from "@mui/material";

export const drawerWidth = 240;

const responsiveFontSizesOptions = { factor: 3 };

export const lightTheme = responsiveFontSizes(createTheme(lightThemeOptions), responsiveFontSizesOptions);

export const darkTheme = responsiveFontSizes(createTheme(darkThemeOptions), responsiveFontSizesOptions);
