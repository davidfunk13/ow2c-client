import Breadcrumb from "../../types/Breadcrumb";

const breadcrumbs = (sessionId: string): Breadcrumb[] => [
    {
        name: "Session",
        bold: true,
        linkPath: `/session/${sessionId}`
    },
];

export default breadcrumbs;
