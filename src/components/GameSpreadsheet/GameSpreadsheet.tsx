import { Box, Grid, Typography } from "@mui/material";
import React, { useState, FC } from "react";
import { CellComponentProps, Point, Spreadsheet, createEmptyMatrix } from "react-spreadsheet";
import useStyles from "./GameSpreadsheet.styles";
import { makeStyles } from "../../utils/makeStyles";
import { DataGrid, GridCellEditCommitParams, GridColumns, GridRenderCellParams, GridRowModel, GridValidRowModel } from "@mui/x-data-grid";
import CustomCellEditor from "./CustomSelect";

interface GameSpreadsheetProps { }

const GameSpreadsheet: FC<GameSpreadsheetProps> = () => {
    const { classes } = useStyles();
    interface Game {
        id: number;
        location: string;
        heroes_played: string;
        outcome: number;
    }
    const rows: GridRowModel<Game>[] = [
        {
            id: 1,
            location: "Hello",
            heroes_played: "XGrid",
            outcome: 3,
        },
        {
            id: 1,
            location: "Hello",
            heroes_played: "asdfasfgadf",
            outcome: 3,
        },

    ];

    const columns: GridColumns<GridValidRowModel> = [
        {
            field: "location",
            headerName: "Location",
            width: 150
        },
        {
            field: "heroes_played",
            headerName: "Heroes Played",
            renderCell: (params: GridRenderCellParams) => CustomCellEditor({
                ...params,
                value: "ass"
            }),
            editable: true,
        },
        {
            field: "outcome",
            headerName: "Game Outcome",
            width: 150
        },

    ];
    return <Grid container spacing={2}>
        <Grid item xs={12} className={classes.responsiveContainer} overflow={"auto"}>
            <DataGrid onCellEditCommit={(params:GridCellEditCommitParams)=>console.log({editParams:params})} columnBuffer={2} autoHeight rows={rows} columns={columns} />
        </Grid>
    </Grid>;
};

export default GameSpreadsheet;
