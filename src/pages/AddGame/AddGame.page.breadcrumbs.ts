import Breadcrumb from "../../types/Breadcrumb";

const breadcrumbs = (sessionId: string): Breadcrumb[] => [
    {
        name: "Session",
        bold: false,
        linkPath: `/session/${sessionId}`
    },
    {
        name: "Add Game",
        bold: true,
        linkPath: `/session/${sessionId}/add-game`
    },
];

export default breadcrumbs;
