const { Types } = require('mongoose');
const { Games, Api, Customers } = require('../model');

const gameMiddleware = async (req, res, next) => {
    var dataQuery = req.query,
        flag = true,
        msg = "";

    try {
        var apiData = await Api.findById(Types.ObjectId(dataQuery.api_key))
        if (apiData === null) {
            flag = false, msg = 'Sorry, something went wrong! Please input correct API key';
        }
    } catch (error) {
        flag = false, msg = `${error.message} as API key`;
    }
    try {
        var apiData = await Customers.findById(Types.ObjectId(dataQuery.customerid))
        if (apiData === null) {
            flag = false, msg = 'Sorry, something went wrong! Please input correct Customer ID';
        }
    } catch (error) {
        flag = false, msg = `${error.message} as Customer ID`;
    }
    try {
        var apiData = await Games.findById(Types.ObjectId(dataQuery.gameid))
        if (apiData === null) {
            flag = false, msg = 'Sorry, something went wrong! Please input correct Game ID';
        }
    } catch (error) {
        flag = false, msg = `${error.message} as Game ID`;
    }
    if (dataQuery.balance === "" || dataQuery.balance === undefined || dataQuery.balance === null || dataQuery.balance === 0) {
        flag = false, msg = 'Sorry, something went wrong! Please input correct Game ID';
    }

    if (flag === false) {
        res.send(msg);
    } else {
        next()
    }
}

module.exports = gameMiddleware