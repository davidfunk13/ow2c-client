import { GameTypeEnum } from "../enums/GameTypeEnum";

export interface Location {
    name: string,
    type: GameTypeEnum.HYBRID | GameTypeEnum.ESCORT | GameTypeEnum.CONTROL | GameTypeEnum.PUSH
    icon: string
};
