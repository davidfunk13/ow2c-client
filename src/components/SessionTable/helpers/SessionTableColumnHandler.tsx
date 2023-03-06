import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Dispatch, SetStateAction } from "react";
import SessionTableActionButtons from "./SessionTableActionButtons";

interface SessionTableColumnHandlerArgs {
    setModalOpen: Dispatch<SetStateAction<boolean>>
    battletagId: string
}

const SessionTableColumnHandler = ({ setModalOpen, battletagId }: SessionTableColumnHandlerArgs): GridColDef[] => [
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
                <SessionTableActionButtons battletagId={battletagId} row={row} setModalOpen={setModalOpen} />
            );
        }
    }
];

export default SessionTableColumnHandler;
