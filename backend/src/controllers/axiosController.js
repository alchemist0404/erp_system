const axios = require('axios')

const sendHook = async ( endpoint, params,  ) => {
    var data = await axios.post(endpoint, params);
    console.log(data);
    return true
};

module.exports = sendHook
