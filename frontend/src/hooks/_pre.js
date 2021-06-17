import jwt from 'jwt-simple';

import Axios from "./_axios";
import config from '../config/config.json';

export const sessionCheck = async () => {
    const data = await new Promise(async resolve => {
        try{
            const token = sessionStorage.getItem('token');
            const user = jwt.decode(token, config.jwt_secret);
            const session = await Axios({
                endpoint : "/api/auth/sessionCheck",
                method : "POST",
                params : { token: user._id }
            });
            if(session.status){
                resolve({
                    auth : {
                        isSession : true,
                        session : "SESSION"
                    }
                })
            } else {
                resolve({
                    auth : {
                        isSession : false,
                        session : {}
                    }
                })
            }

        } catch (e) {
            resolve({
                auth : {
                    isSession : false,
                    session : {}
                }
            })
        }
    });
    return data;
}