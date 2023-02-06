import * as Yup from 'yup';

const validation = Yup.object().shape({
    sessionName: Yup.string()
        .min(2, 'Too Short!')
        .max(35, 'Too Long!')
        .required('Required'),
});

export default validation;