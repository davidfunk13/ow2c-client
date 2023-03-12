import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import { FC } from "react";
import locations, { controlLocations, escortLocations, hybridLocations, pushLocations } from "../../../../utils/Locations";
import LocationCard from "../../../MapCard/MapCard";

interface SelectLocationPlayedProps {

}

const SelectLocationPlayed: FC<SelectLocationPlayedProps> = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Autocomplete
                    options={locations}
                    getOptionLabel={(option) => option.name}
                    id={"select-location-input"} sss
                    renderInput={(params) => <TextField {...params} label={"Select Location"} />}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant={"h1"}>
                    {"Select Location"}
                </Typography>
            </Grid>
            <Grid container spacing={2} item xs={12}>
                <Grid item xs={12}>
                    <Typography variant={"h4"}>
                        {"Control"}
                    </Typography>
                </Grid>
                {controlLocations.map(location =>
                    <Grid item xs={6}>
                        <LocationCard location={location} />
                    </Grid>
                )}
            </Grid>
            <Grid container spacing={2} item xs={12}>
                <Grid item xs={12}>
                    <Typography variant={"h4"}>
                        {"Hybrid"}
                    </Typography>
                </Grid>
                {hybridLocations.map(location =>
                    <Grid item xs={2}>
                        <LocationCard location={location} />
                    </Grid>
                )}
            </Grid>
            <Grid container spacing={2} item xs={12}>
                <Grid item xs={12}>
                    <Typography variant={"h4"}>
                        {"Escort"}
                    </Typography>
                </Grid>
                {escortLocations.map(location =>
                    <Grid item xs={2}>
                        <LocationCard location={location} />
                    </Grid>
                )}
            </Grid>
            <Grid container spacing={2} item xs={12}>
                <Grid item xs={12}>
                    <Typography variant={"h4"}>
                        {"Push"}
                    </Typography>
                </Grid>
                {pushLocations.map(location =>
                    <Grid item xs={2}>
                        <LocationCard location={location} />
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
};

export default SelectLocationPlayed;
