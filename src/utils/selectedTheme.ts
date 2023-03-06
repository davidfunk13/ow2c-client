
import { darkTheme, theme } from "../theme/theme";

const selectedTheme = (isDark: boolean) => isDark ? darkTheme : theme;

export default selectedTheme;
