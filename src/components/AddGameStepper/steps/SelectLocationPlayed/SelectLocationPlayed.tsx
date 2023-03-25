import { Autocomplete, Grid, TextField, Typography, AutocompleteInputChangeReason, GridProps } from "@mui/material";
import { FC, SyntheticEvent, useRef, useState } from "react";
import { GameTypeEnum } from "../../../../enums/GameTypeEnum";
import { Location } from "../../../../types/Location";
import locations from "../../../../utils/Locations";
import LocationCard from "../../../MapCard/MapCard";
import { BaseSyntheticEvent } from "react";
import StepperButton from "../../../StepperButtons/StepperButtons";
interface SelectLocationPlayedProps {

}

const SelectLocationPlayed: FC<SelectLocationPlayedProps> = () => {
    const [value, setValue] = useState<Location | null>({} as Location);
    
    const [inputValue, setInputValue] = useState("");
    
    const [displayResults, setDisplayResults] = useState<Location[]>(locations);
    
    const Combo = useRef<{ inputValue: string }>(null);

    const onBlur = (e: BaseSyntheticEvent) => {
        if (Combo.current) {
            Combo.current.inputValue = e.target.value;
        }
    };

    const filterLocations = (inputValue: string) => {
        if (!inputValue) {
            return locations;
        }

        const results = locations.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()));

        return results;
    };

    const handleInputOnChange = (_: BaseSyntheticEvent, newInputValue: string, __: AutocompleteInputChangeReason) => {
        const results = filterLocations(newInputValue);
        setDisplayResults(results);
        setValue({ name: newInputValue } as Location);
        setInputValue(newInputValue);
    };

    const handleOnChange = (event: SyntheticEvent<Element, Event>, newValue: Location | null) => {
        if (!newValue) {
            setDisplayResults(locations);
        }

        setValue(newValue);
    };

    const handleCardOnClick = (location: Location) => {
        setValue(location);
        setInputValue(location.name);
        setDisplayResults([location]);
    };

    const cardRowProps: GridProps = {
        xs: 12,
        sm: 6,
        md: 4,
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Autocomplete
                    id={"select-location-input"}
                    value={value}
                    ref={Combo}
                    onChange={handleOnChange}
                    inputValue={inputValue}
                    onInputChange={handleInputOnChange}
                    options={locations}
                    getOptionLabel={(option: Location) => option.name ?? ""}
                    renderInput={(params) =>
                        <TextField
                            onBlur={onBlur}
                            {...params}
                            label={"Select Location"}
                        />
                    }
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant={"h1"}>
                    {"Select Location"}
                </Typography>
            </Grid>

            {displayResults?.filter(location => location.type === GameTypeEnum.CONTROL).length ?
                <Grid container spacing={2} item xs={12}>
                    <Grid item xs={12}>
                        <Typography variant={"h4"}>
                            {"Control"}
                        </Typography>
                    </Grid>
                    {displayResults?.filter(location => location.type === GameTypeEnum.CONTROL).map(location =>
                        <Grid key={`${location.name}-card`} item {...cardRowProps}>
                            <LocationCard onClick={() => handleCardOnClick(location)} location={location} />
                        </Grid>
                    )}
                </Grid> : null}
            {displayResults?.filter(location => location.type === GameTypeEnum.HYBRID).length ?
                <Grid container spacing={2} item xs={12}>
                    <Grid item xs={12}>
                        <Typography variant={"h4"}>
                            {"Hybrid"}
                        </Typography>
                    </Grid>
                    {displayResults?.filter(location => location.type === GameTypeEnum.HYBRID).map(location =>
                        <Grid key={`${location.name}-card`} item {...cardRowProps}>
                            <LocationCard onClick={() => handleCardOnClick(location)} location={location} />
                        </Grid>
                    )}
                </Grid> : null}
            {displayResults?.filter(location => location.type === GameTypeEnum.ESCORT).length ?
                <Grid container spacing={2} item xs={12}>
                    <Grid item xs={12}>
                        <Typography variant={"h4"}>
                            {"Escort"}
                        </Typography>
                    </Grid>
                    {displayResults?.filter(location => location.type === GameTypeEnum.ESCORT).map(location =>
                        <Grid key={`${location.name}-card`} item {...cardRowProps}>
                            <LocationCard onClick={() => handleCardOnClick(location)} location={location} />
                        </Grid>
                    )}
                </Grid> : null}
            {displayResults?.filter(location => location.type === GameTypeEnum.PUSH).length ?
                <Grid container spacing={2} item xs={12}>
                    <Grid item xs={12}>
                        <Typography variant={"h4"}>
                            {"Push"}
                        </Typography>
                    </Grid>
                    {displayResults?.filter(location => location.type === GameTypeEnum.PUSH).map(location =>
                        <Grid key={`${location.name}-card`} item {...cardRowProps}>
                            <LocationCard onClick={() => handleCardOnClick(location)} location={location} />
                        </Grid>
                    )}
                </Grid> : null}
<StepperButton/>
        </Grid>
    );
};

export default SelectLocationPlayed;

