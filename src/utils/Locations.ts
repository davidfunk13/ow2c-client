import KingsRowIcon from "../assets/icons/maps/hybrid/kingsrow.png";

export interface Location {
    name: string,
    type: "Hybrid" | "Escort" | "Control" | "Push"
    icon: string
};

const locations: Location[] = [
    {
        name: "King's Row",
        type: "Hybrid",
        icon: KingsRowIcon,
    },
    // {
    //     name: "Watchpoint Gibraltar",
    //     type: "Escort",
    //     icon: require("../assets/icons/maps/escort/gibraltar.png"),
    // },
    // {
    //     name: "Numbani",
    //     type: "Hybrid",
    //     icon: require("../assets/icons/maps/hybrid/numbani.png"),
    // },
    // {
    //     name: "Dorado",
    //     type: "Escort",
    //     icon: require("../assets/icons/maps/escort/dorado.png"),
    // },
    // {
    //     name: "Hollywood",
    //     type: "Hybrid",
    //     icon: require("../assets/icons/maps/hybrid/hollywood.png"),
    // },
    // {
    //     name: "Lijiang Tower",
    //     type: "Control",
    //     icon: require("../assets/icons/maps/control/lijiang.png"),
    // },
    // {
    //     name: "Nepal",
    //     type: "Control",
    //     icon: require("../assets/icons/maps/control/nepal.png"),
    // },
    // {
    //     name: "Ilios",
    //     type: "Control",
    //     icon: require("../assets/icons/maps/control/ilios.png"),
    // },
    // {
    //     name: "Route 66",
    //     type: "Escort",
    //     icon: require("../assets/icons/maps/escort/route66.png"),
    // },
    // {
    //     name: "Eichenwalde",
    //     type: "Hybrid",
    //     icon: require("../assets/icons/maps/hybrid/eichenwalde.png"),
    // },
    // {
    //     name: "Oasis",
    //     type: "Control",
    //     icon: require("../assets/icons/maps/control/oasis.png"),
    // },
    // {
    //     name: "Junkertown",
    //     type: "Escort",
    //     icon: require("../assets/icons/maps/escort/junkertown.png"),
    // },
    // {
    //     name: "Blizzard World",
    //     type: "Hybrid",
    //     icon: require("../assets/icons/maps/hybrid/blizzardworld.png"),
    // },
    // {
    //     name: "Rialto",
    //     type: "Escort",
    //     icon: require("../assets/icons/maps/escort/rialto.png"),
    // },
    // {
    //     name: "Busan",
    //     type: "Control",
    //     icon: require("../assets/icons/maps/control/busan.png"),
    // },
    // {
    //     name: "Havana",
    //     type: "Escort",
    //     icon: require("../assets/icons/maps/escort/havana.png"),
    // },
];

export default locations;
