import { GAMES } from "../../constants";

export const games_store = (params) => {
    return dispatch => (
        dispatch({
            type : GAMES,
            payload : params
        })
    )
}