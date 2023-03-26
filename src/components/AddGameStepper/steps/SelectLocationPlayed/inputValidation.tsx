import * as Yup from "yup";

export const validationSchema = Yup.object().shape({ location: Yup.string().required("Location is required"), });
