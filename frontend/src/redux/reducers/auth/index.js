import { 
    SESSION,
    SESSIONEXPIRE
} from "../../constants"
  
const Auth = (state = {
    session : {}
}, action) => {
    switch (action.type) {
        case SESSION: {
            return { ...state, isSession: true, session: action.payload }
        }
        case SESSIONEXPIRE: {
            return { ...state, isSession: false, session: {} }
        }
        default: {
            return { ...state }
        }
    }
}
export default Auth;