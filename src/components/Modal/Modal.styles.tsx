import { makeStyles } from "../../utils/makeStyles";

const useStyles = makeStyles({ name: "Modal Styles" })((theme) => ({
    modal: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        minWidth: "50vw",
        display: "flex",
        backgroundColor: "white",
    }
}));

export default useStyles;
