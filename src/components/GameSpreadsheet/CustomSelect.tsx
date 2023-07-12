import React from "react";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import { Grid, MenuItem, Select, SelectChangeEvent } from "@mui/material";

const CustomCellEditor = (props: GridCellParams) => {
    const handleValueChange = (event: SelectChangeEvent<any>) => {
        const { id, field } = props;
        const newValue = event.target.value;
        // Handle value change
        props.api!.commitCellChange({
            id,
            field,
            value: newValue
        });
    };

    return (
        <Grid container>
            <Grid item xs={12}>

                <Select value={props.value} onChange={handleValueChange}>
                    <MenuItem value={"option1"}>{"Option 1"}</MenuItem>
                    <MenuItem value={"option2"}>{"Option 2"}</MenuItem>
                    <MenuItem value={"option3"}>{"Option 3"}</MenuItem>
                </Select>
            </Grid>
        </Grid>
    );
};
export default CustomCellEditor;
