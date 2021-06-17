import { 
    CUSTOMERS,
    CUSTOMER_ID
} from "../../constants";

const Customers = (state = {
    customerdata : [],
    customerid: ""
}, action) => {
    switch (action.type) {
        case CUSTOMERS :{
            return { ...state, customerdata : action.payload }
        }
        case CUSTOMER_ID :{
            return { ...state, customerid : action.payload }
        }
        default: {
            return { ...state }
        }
    }
}
export default Customers;