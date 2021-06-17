import axios from "axios";

// ** Declare API Func
const API_URL = () => {
    if(process.env.NODE_ENV === "development"){
        return "http://localhost:6140";
    } else {
        return "https://api.hellenium.com";
    }
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