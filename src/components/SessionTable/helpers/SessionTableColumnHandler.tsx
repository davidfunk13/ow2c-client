import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import SessionTableActionButtons from "./SessionTableActionButtons";

const SessionTableColumnHandler = (): GridColDef[] => [
    {
        field: "name",
        headerName: "Session Name",
        flex: 1,
    },
    {
        field: "actions",
        headerName: "Actions",
        flex: 1,
        renderCell: ({ row }: GridRenderCellParams) => {
            return (
                <SessionTableActionButtons row={row} />
            );
        }
    }
];

export default SessionTableColumnHandler;
