import { makeStyles } from "../../utils/makeStyles";

const useStyles = makeStyles({ name: "Navbar Styles" })((theme) => ({
    appBar: {
        position: "fixed",
        zIndex: theme.zIndex.drawer + 1
    },
    icon: {
        height: 50,
        minWidth: 100,
        padding: theme.spacing(.5),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(1),
        },
    },
    navItemBox: {
        [theme.breakpoints.up("xs")]: {
            display: "none",
        },
        [theme.breakpoints.up("md")]: {
            display: "block",
        },
    },
}
));

export default useStyles;