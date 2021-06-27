import { 
    BETHISTORY
} from "../../constants";

const BetHistories = (state = {
    betHistory : []
}, action) => {
    switch (action.type) {
        case BETHISTORY :{
            return { ...state, betHistory : action.payload }
        }
        default: {
            return { ...state }
        }
    }
}
export default BetHistories;