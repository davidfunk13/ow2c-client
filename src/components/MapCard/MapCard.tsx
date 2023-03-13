import { Card, CardHeader, CardMedia } from "@mui/material";
import { FC } from "react";
import { Location } from "../../types/Location";
import useStyles from "./MapCard.styles";

interface LocationCardProps {
    location: Location
    onClick: () => void
}

const LocationCard: FC<LocationCardProps> = ({ location, onClick }) => {
    const { classes } = useStyles();
    return (
        <Card onClick={onClick} className={classes.card}>
            <CardMedia
                component={"img"}
                image={location.icon}
                height={"150"}
                alt={location.name}
            />
            <CardHeader title={location.name} subheader={location.type} />
        </Card>
    );
};

export default LocationCard;
