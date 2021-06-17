import { RTP } from "../../constants";

export const rtp_store = (params) => {
    return dispatch => (
        dispatch({
            type : RTP,
            payload : params
        })
    )
}