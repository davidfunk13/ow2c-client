import * as Yup from "yup";

const inputValidation = Yup.object().shape({ result: Yup.number().required().typeError("You must pick an result") });

export default inputValidation;
