import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import GameTableActionButtons from "./GameTableActionButtons";

const GameTableColumnHandler = (): GridColDef[] => [
    {
        field: "location",
        headerName: "Location",
        flex: 1,
    },
    {
        field: "actions",
        headerName: "Actions",
        flex: 1,
        renderCell: ({ row }: GridRenderCellParams) => {
            return (
                <GameTableActionButtons row={row} />
            );
        }
    }
];

export default GameTableColumnHandler;
