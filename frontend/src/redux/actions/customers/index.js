import { CUSTOMERS, CUSTOMER_ID } from "../../constants";

export const customers_store = (params) => {
    return dispatch => (
        dispatch({
            type : CUSTOMERS,
            payload : params
        })
    )
}

export const customer_id_store = (params) => {
    return dispatch => (
        dispatch({
            type : CUSTOMER_ID,
            payload : params
        })
    )
}