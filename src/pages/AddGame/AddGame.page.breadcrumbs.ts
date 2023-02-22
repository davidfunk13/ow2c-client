import Breadcrumb from '../../types/Breadcrumb';
import Session from '../../types/Session';

const breadcrumbs = (sessionId:string):Breadcrumb[] => [
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