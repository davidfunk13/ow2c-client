import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { FC } from "react";
import locations, { Location } from "../../../../utils/Locations";

interface SelectMapPlayedProps {

}

interface MapCardProps {
    location: Location
}

const MapCard: FC<MapCardProps> = ({ location }) => {
    return (
        <Card>
            <CardHeader>
                {location.name}
            </CardHeader>
            <CardContent>
                {location.icon}
            </CardContent>
        </Card>
    );
};

const SelectMapPlayed: FC<SelectMapPlayedProps> = ({ }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant={"h1"}>
                    {"Select Location"}
                </Typography>
                {locations.map(location => <MapCard location={location} />)}
            </Grid>
        </Grid>
    );
};

export default SelectMapPlayed;
