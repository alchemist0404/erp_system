import { 
    SESSION,
    SESSIONEXPIRE,
} from "../../constants"

export const session_store = (params) => {
    return dispatch => (
        dispatch({
            type : SESSION,
            payload : params
        })
    )
}

export const session_expire = () => {
    return dispatch => (
        dispatch({
            type : SESSIONEXPIRE
        })
    )
}