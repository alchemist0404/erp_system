import { 
    GAMES
} from "../../constants";

const Games = (state = {
    gamedata : []
}, action) => {
    switch (action.type) {
        case GAMES :{
            return { ...state, gamedata : action.payload }
        }
        default: {
            return { ...state }
        }
    }
}
export default Games;