import { USERS, USER_ID } from "../../constants";

export const users_store = (params) => {
    return dispatch => (
        dispatch({
            type : USERS,
            payload : params
        })
    )
}

export const user_id_store = (params) => {
    return dispatch => (
        dispatch({
            type : USER_ID,
            payload : params
        })
    )
}