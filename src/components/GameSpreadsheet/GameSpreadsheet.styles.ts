import { drawerWidth } from "../../theme/theme";
import { makeStyles } from "../../utils/makeStyles";

const useStyles = makeStyles({ name: "DesktopMenu Styles" })((theme) => ({
    responsiveContainer: {
        overflowX: "auto",
        "&::-webkit-scrollbar": {
          height: "0.5em",
          backgroundColor: theme.palette.grey[200],
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.grey[400],
          borderRadius: "0.25em",
        },
      },
      customCell: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#f0f0f0",
      },
}));

export default useStyles;
