const axios = require('axios')

exports.sendHook = async ( endpoint, params,  ) => {
    var data = await axios.post(endpoint, params);
    console.log(data);
    return true
};
