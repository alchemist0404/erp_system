import { BETHISTORY } from "../../constants";

export const bet_history_store = (params) => {
    return dispatch => (
        dispatch({
            type : BETHISTORY,
            payload : params
        })
    )
}