import { 
    SESSION,
    SESSIONEXPIRE,
} from "../../constants"

export const session_store = (params) => {
    localStorage.setItem("auth", JSON.stringify(params))
    return dispatch => (
        dispatch({
            type : SESSION,
            payload : params
        })
    )
}

export const session_expire = () => {
    localStorage.removeItem("auth");
    return dispatch => (
        dispatch({
            type : SESSIONEXPIRE
        })
    )
}