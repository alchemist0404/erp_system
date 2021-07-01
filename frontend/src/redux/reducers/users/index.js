import { 
    USERS,
    USER_ID
} from "../../constants";

const Users = (state = {
    userdata : [],
    userid: ""
}, action) => {
    switch (action.type) {
        case USERS :{
            return { ...state, userdata : action.payload }
        }
        case USER_ID :{
            return { ...state, userid : action.payload }
        }
        default: {
            return { ...state }
        }
    }
}
export default Users;