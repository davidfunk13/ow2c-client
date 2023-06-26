import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import GameTableActionButtons from "./GameTableActionButtons";
import Game from "../../../types/Game";

const GameTableColumnHandler = (): GridColDef[] => [
    {
        field: "location",
        headerName: "Location",
        flex: 1,
    },
    {
        field: "result",
        headerName: "Result",
        valueGetter: ({ value }: GridRenderCellParams<Game>) => Boolean(value) ? "Win" : "Loss",
        flex: 1,
    },
    {
        field: "actions",
        headerName: "Actions",
        flex: 1,
        renderCell: ({ row }: GridRenderCellParams<Game>) => {
            return (
                <GameTableActionButtons row={row} />
            );
        }
    }
];

export default GameTableColumnHandler;
