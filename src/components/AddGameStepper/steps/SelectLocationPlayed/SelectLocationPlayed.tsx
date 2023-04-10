import { Autocomplete, Grid, TextField, Typography, AutocompleteInputChangeReason, Button } from "@mui/material";
import { FC, SyntheticEvent, useRef, useState } from "react";
import { Location } from "../../../../types/Location";
import locations from "../../../../utils/Locations";
import { BaseSyntheticEvent } from "react";
import { useFormik } from "formik";
import submitFormWithPrevent from "../../../../utils/submitFormWithPrevent";
import validationSchema from "./inputValidation";
import { useAppDispatch } from "../../../../redux/hooks";
import { setGameLocation } from "../../addGameSlice.";
import { setHorizontalStepperStepForward } from "../../../HorizontalStepper/horizontalStepperSlice";

interface SelectLocationPlayedProps {

}

interface SelectLocationValues {
    location: string;
}

const initialValues: SelectLocationValues = { location: "" };

const SelectLocationPlayed: FC<SelectLocationPlayedProps> = () => {
    const [value, setValue] = useState<Location | null>({} as Location);
    const dispatch = useAppDispatch();

    const handleSubmitLocation = ({ location }: SelectLocationValues) => {
        const a = locations.find((loc) => loc.name === location);
        dispatch(setGameLocation(a));
        dispatch(setHorizontalStepperStepForward());
    };

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        validateOnChange: false,
        validateOnBlur: true,
        onSubmit: (values) => handleSubmitLocation(values),
    });

    const { values, setFieldValue, handleSubmit, errors } = formik;

    const [_, setDisplayResults] = useState<Location[]>(locations);

    const Combo = useRef<{ inputValue: string }>(null);

    const onBlur = (e: BaseSyntheticEvent) => {
        if (Combo.current) {
            Combo.current.inputValue = e.target.value;
        }
    };

    const handleInputOnChange = (_: BaseSyntheticEvent, newInputValue: string, __: AutocompleteInputChangeReason) => {
        setFieldValue("location", newInputValue);
    };

    const handleOnChange = (_: SyntheticEvent<Element, Event>, newValue: Location | null) => {
        if (!newValue) {
            setDisplayResults(locations);
        }

        setValue(newValue);
    };

    return (
        <Grid container component={"form"} id={"select-location"} name={"select-location"} onSubmit={(e) => submitFormWithPrevent(e, handleSubmit)} spacing={2}>
            <Grid item xs={12}>
                <Typography variant={"h1"}>
                    {"Select Location"}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Autocomplete
                    id={"select-location-input"}
                    value={value}
                    ref={Combo}
                    onChange={handleOnChange}
                    inputValue={values.location}
                    onInputChange={handleInputOnChange}
                    options={locations}
                    getOptionLabel={(option: Location) => option.name ?? ""}
                    renderInput={(params) =>
                        <TextField
                            onBlur={onBlur}
                            {...params}
                            error={Boolean(errors.location)}
                            helperText={errors.location}
                            label={"Select Location"}
                        />
                    }
                />
            </Grid>
            <Grid item xs={12}>
                <Button type={"submit"} variant={"contained"} color={"primary"}>{"Next"}</Button>
            </Grid>
        </Grid>
    );
};

export default SelectLocationPlayed;

