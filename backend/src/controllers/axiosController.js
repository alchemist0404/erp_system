const axios = require('axios')

exports.sendHook = async ( endpoint, method="post", params={}  ) => {
    var data = await axios({
        method,
        url: endpoint,
        data: params
    });
    if (data.status === 200) {
        return data.data
    } else {
        return false
    }
};
