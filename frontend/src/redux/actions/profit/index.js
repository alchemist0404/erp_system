import { PROFITS } from "../../constants";

export const profits_store = (params) => {
    return dispatch => (
        dispatch({
            type : PROFITS,
            payload : params
        })
    )
}