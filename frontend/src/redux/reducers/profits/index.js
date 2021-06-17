import { 
    PROFITS
} from "../../constants";

const Profits = (state = {
    profitdata : []
}, action) => {
    switch (action.type) {
        case PROFITS :{
            return { ...state, profitdata : action.payload }
        }
        default: {
            return { ...state }
        }
    }
}
export default Profits;