import { makeStyles } from "../utils/makeStyles";

const useStyles = makeStyles({ name: "ViewProvider Styles" })((theme) => ({
    mobileContainer: {
        padding: theme.spacing(3),
        flexGrow: 1
    },
    desktopContainer: {
        padding: theme.spacing(3),
        flexGrow: 1,
        marginLeft: theme.spacing(30)
    },
    breadcrumbPadding: {
        paddingLeft: theme.spacing(2)
    }
}));

export default useStyles;