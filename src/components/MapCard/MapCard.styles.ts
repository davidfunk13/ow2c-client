import { makeStyles } from "../../utils/makeStyles";

const useStyles = makeStyles({ name: "LocationCard Styles" })((theme) => ({
    card: {
        height: 250,
        "& .MuiCardHeader-content": { width: "100%" },
    },
}));

export default useStyles;
