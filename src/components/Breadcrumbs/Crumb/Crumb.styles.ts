import { makeStyles } from "../../../utils/makeStyles";

const useStyles = makeStyles<{ isBold: boolean }>({ name: "Crumb Styles" })((theme, { isBold }) => ({
    makeBold: {
        fontWeight: isBold ? "bold" : "unset"
    }
}));

export default useStyles;