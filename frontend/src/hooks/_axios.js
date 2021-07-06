import axios from "axios";
import { home_url } from './_root'

// ** Declare Custome Axios
const request = async ({endpoint, method, params}, cb) => {
    const property = {
        method: method,
        url: home_url + endpoint,
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