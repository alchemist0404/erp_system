import Axios from "./_axios";

// ** Declare Auth API
export const signin = async (params) => {
    var result = await Axios({
        endpoint : "/api/auth/signin",
        method : "POST",
        params : params
    });
    return result;
}

export const signup = async (params) => {
    var result = await Axios({
        endpoint : "/api/auth/signup",
        method : "POST",
        params : params
    });
    return result;
}

export const subscribe = async (params) => {
    var result = await Axios({
        endpoint : "/api/subscribe/upgrade",
        method : "POST",
        params : params
    });
    return result;
}

//  ** Declare Games API

export const getGames = async () => {
    var result = await Axios({
        endpoint : "/api/games",
        method : "GET"
    });
    return result;
}

export const addGame = async (params) => {
    var result = await Axios({
        endpoint : "/api/games",
        method : "POST",
        params : params
    });
    return result;
}

export const deleteGame = async (params) => {
    var result = await Axios({
        endpoint : `/api/games/${params}`,
        method : "DELETE",
        params : ""
    });
    await Axios({
        endpoint : `/api/rtp/${params}`,
        method : "DELETE",
        params : ""
    });
    return result;
}

export const deleteMultiGame = async (params) => {
    const result = await Axios({
        endpoint : "/api/games/delete",
        method : "POST",
        params : params
    });
    await Axios({
        endpoint : `/api/rtp/delete`,
        method : "DELETE",
        params : params
    });
    return result;
}

export const editGame = async (params, gameId) => {
    const result = await Axios({
        endpoint : `/api/games/${gameId}`,
        method : "PUT",
        params : params
    });
    return result;
}

//  ** Declare Rtp API

export const getRtp = async (params) => {
    const result = await Axios({
        endpoint : "/api/rtp",
        method : "GET"
    });
    return result;
}

export const editRtp = async (params, rtpId) => {
    const result = await Axios({
        endpoint : `/api/rtp/${rtpId}`,
        method : "PUT",
        params : params
    });
    return result;
}

//  ** Declare Users API

export const getUsers = async (params) => {
    var result = await Axios({
        endpoint : "/api/customers",
        method : "GET"
    });
    return result;
}

export const addUser = async (params) => {
    var result = await Axios({
        endpoint : "/api/customers",
        method : "POST",
        params : params
    });
    return result;
}

export const deleteUser = async (params) => {
    var result = await Axios({
        endpoint : `/api/customers/${params}`,
        method : "DELETE",
        params : ""
    });
    await Axios({
        endpoint : `/api/rtp/${params}`,
        method : "DELETE",
        params : ""
    });
    return result;
}

export const deleteMultiUser = async (params) => {
    const result = await Axios({
        endpoint : "/api/customers/delete",
        method : "POST",
        params : params
    });
    await Axios({
        endpoint : `/api/rtp/delete`,
        method : "DELETE",
        params : params
    });
    return result;
}

export const editUser = async (params, gameId) => {
    const result = await Axios({
        endpoint : `/api/customers/${gameId}`,
        method : "PUT",
        params : params
    });
    return result;
}



//  ** Declare Profit API

export const getProfits = async (params) => {
    var result = await Axios({
        endpoint : `/api/profit/${params}`,
        method : "GET"
    });
    return result;
}

export const getAllProfits = async () => {
    var result = await Axios({
        endpoint : `/api/profit/all`,
        method : "GET"
    });
    return result;
}

export const addProfit = async (params) => {
    var result = await Axios({
        endpoint : "/api/profit",
        method : "POST",
        params : params
    });
    return result;
}

export const deleteProfit = async (params) => {
    var result = await Axios({
        endpoint : `/api/profit/${params}`,
        method : "DELETE",
        params : ""
    });
    return result;
}

export const deleteMultiProfit = async (params) => {
    const result = await Axios({
        endpoint : "/api/profit/delete",
        method : "POST",
        params : params
    });
    return result;
}

export const editProfit = async (params, gameId) => {
    const result = await Axios({
        endpoint : `/api/profit/${gameId}`,
        method : "PUT",
        params : params
    });
    return result;
}

export const getBetHistory = async () => {
    const result = await Axios({
        endpoint : `/api/betHistory/getBetHistory`,
        method : "GET",
    });
    return result;
}