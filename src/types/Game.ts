import GameResultEnum from "./GameResultEnum";

interface Game {
    id: string
    battletag_id: string
    session_id: string
    location: string
    result: GameResultEnum
}

export default Game;
