import * as Yup from "yup";

const inputValidation = Yup.object().shape({ outcome: Yup.string().required("Must select an outcome to continue") });

export default inputValidation;
