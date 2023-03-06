import { SyntheticEvent } from "react";

const submitFormWithPrevent = (e: SyntheticEvent, handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void) => {
    e.preventDefault();
    e.stopPropagation();
    handleSubmit();
};

export default submitFormWithPrevent;
