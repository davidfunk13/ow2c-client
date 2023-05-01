import { makeStyles } from "../../utils/makeStyles";

const useStyles = makeStyles({ name: "Navbar Styles" })((theme) => ({
    appBar: {
        position: "fixed",
        zIndex: theme.zIndex.drawer + 1
    }
}
));

export default useStyles;
