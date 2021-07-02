import axios from "axios";

// ** Declare API Func
const API_URL = () => {
    // if(process.env.NODE_ENV === "development"){
    //     return "http://localhost:6140";
    // } else {
    // }
    return "http://199.192.17.41";
}

// ** Declare Custome Axios
const request = async ({endpoint, method, params}, cb) => {
    const property = {
        method: method,
        url: API_URL() + endpoint,
        data : params
    };
    try{
        const response = await axios(property);
        return response.data;
    } catch(e) {
        return e.toString();
    }
}
export default request;