import { makeStyles } from "../../utils/makeStyles";

const useStyles = makeStyles<{ isBold: boolean }>({ name: "Horizontal Stepper Styles" })((theme) => ({
    fullWidth: {
        width: "100%"
    }
}));

export default useStyles;