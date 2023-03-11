import KingsRowIcon from "../assets/icons/maps/hybrid/kingsrow.png";
import CircuitRoyalIcon from "../assets/icons/maps/escort/circuit_royal.png";
import ShambaliMonasteryIcon from "../assets/icons/maps/escort/shambali_monastery.png";
import AntarcticPeninsulaIcon from "../assets/icons/maps/control/antarctic_peninsula.png";
import ColosseoIcon from "../assets/icons/maps/push/colosseo.png";
import EsperancaIcon from "../assets/icons/maps/push/esperanca.png";
import NewQueenStreetIcon from "../assets/icons/maps/push/new_queen_street.png";
import MidtownIcon from "../assets/icons/maps/hybrid/midtown.png";
import ParaisoIcon from "../assets/icons/maps/hybrid/paraiso.png";
import GibraltarIcon from "../assets/icons/maps/escort/gibraltar.png";
import NumbaniIcon from "../assets/icons/maps/hybrid/numbani.png";
import DoradoIcon from "../assets/icons/maps/escort/dorado.png";
import HollywoodIcon from "../assets/icons/maps/hybrid/hollywood.png";
import LijiangIcon from "../assets/icons/maps/control/lijiang.png";
import NepalIcon from "../assets/icons/maps/control/nepal.png";
import IliosIcon from "../assets/icons/maps/control/ilios.png";
import Route66Icon from "../assets/icons/maps/escort/route66.png";
import EichenwaldeIcon from "../assets/icons/maps/hybrid/eichenwalde.png";
import OasisIcon from "../assets/icons/maps/control/oasis.png";
import JunkertownIcon from "../assets/icons/maps/escort/junkertown.png";
import BlizzardWorldIcon from "../assets/icons/maps/hybrid/blizzardworld.png";
import RialtoIcon from "../assets/icons/maps/escort/rialto.png";
import BusanIcon from "../assets/icons/maps/control/busan.png";
import HavanaIcon from "../assets/icons/maps/escort/havana.png";
import { GameTypeEnum } from "../enums/GameTypeEnum";
import { Location } from "../types/Location";

const locations: Location[] = [
    {
        name: "Antarctic Peninsula",
        type: GameTypeEnum.CONTROL,
        icon: AntarcticPeninsulaIcon,
    },
    {
        name: "Blizzard World",
        type: GameTypeEnum.HYBRID,
        icon: BlizzardWorldIcon
    },
    {
        name: "Busan",
        type: GameTypeEnum.CONTROL,
        icon: BusanIcon
    },
    {
        name: "Circuit Royal",
        type: GameTypeEnum.ESCORT,
        icon: CircuitRoyalIcon,
    },
    {
        name: "Colosseo",
        type: GameTypeEnum.PUSH,
        icon: ColosseoIcon,
    },
    {
        name: "Dorado",
        type: GameTypeEnum.ESCORT,
        icon: DoradoIcon
    },
    {
        name: "Eichenwalde",
        type: GameTypeEnum.HYBRID,
        icon: EichenwaldeIcon
    },
    {
        name: "Esperanca",
        type: GameTypeEnum.PUSH,
        icon: EsperancaIcon,
    },
    {
        name: "Havana",
        type: GameTypeEnum.ESCORT,
        icon: HavanaIcon
    },
    {
        name: "Hollywood",
        type: GameTypeEnum.HYBRID,
        icon: HollywoodIcon
    },
    {
        name: "Ilios",
        type: GameTypeEnum.CONTROL,
        icon: IliosIcon
    },
    {
        name: "Junkertown",
        type: GameTypeEnum.ESCORT,
        icon: JunkertownIcon
    },
    {
        name: "King's Row",
        type: GameTypeEnum.HYBRID,
        icon: KingsRowIcon,
    },
    {
        name: "Lijiang Tower",
        type: GameTypeEnum.CONTROL,
        icon: LijiangIcon
    },
    {
        name: "Midtown",
        type: GameTypeEnum.HYBRID,
        icon: MidtownIcon,
    },
    {
        name: "Nepal",
        type: GameTypeEnum.CONTROL,
        icon: NepalIcon
    },
    {
        name: "New Queen Street",
        type: GameTypeEnum.PUSH,
        icon: NewQueenStreetIcon,
    },
    {
        name: "Numbani",
        type: GameTypeEnum.HYBRID,
        icon: NumbaniIcon,
    },
    {
        name: "Oasis",
        type: GameTypeEnum.CONTROL,
        icon: OasisIcon
    },
    {
        name: "Paraiso",
        type: GameTypeEnum.HYBRID,
        icon: ParaisoIcon,
    },
    {
        name: "Rialto",
        type: GameTypeEnum.ESCORT,
        icon: RialtoIcon
    },
    {
        name: "Route 66",
        type: GameTypeEnum.ESCORT,
        icon: Route66Icon
    },
    {
        name: "Shambali Monastery",
        type: GameTypeEnum.ESCORT,
        icon: ShambaliMonasteryIcon,
    },
    {
        name: "Watchpoint Gibraltar",
        type: GameTypeEnum.ESCORT,
        icon: GibraltarIcon,
    },
];

export default locations;

export const controlLocations = locations.filter(location => location.type === GameTypeEnum.CONTROL);
export const hybridLocations = locations.filter(location => location.type === GameTypeEnum.HYBRID);
export const escortLocations = locations.filter(location => location.type === GameTypeEnum.ESCORT);
export const pushLocations = locations.filter(location => location.type === GameTypeEnum.PUSH);
