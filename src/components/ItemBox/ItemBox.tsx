import { Card, CardContent, Grid, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { FC, ReactNode } from "react";

interface ItemBoxProps {
    boxTitle?: string
    children: ReactNode
}

const renderTitle = (boxTitle: string) => {
    return (
        <Typography ml={2} variant={"h4"}>
            {boxTitle}
        </Typography>
    );
};

const ItemBox: FC<ItemBoxProps> = ({ boxTitle, children }) => {
    const theme = useTheme();
    console.log(theme);
    return (
        <Card component={Box} p={2}>
            {boxTitle ? renderTitle(boxTitle) : undefined}
            <CardContent component={Grid} container spacing={2} alignItems={"center"}>
                {children}
            </CardContent>
        </Card >
    );
};

export default ItemBox;
