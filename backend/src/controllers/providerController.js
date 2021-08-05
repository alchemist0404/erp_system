const axiosController = require('./axiosController');
const customerModel = require('../model/customers');
exports.getUserInfo = (req, res) => {
    // axiosController.sendHook("")
    const { customer_id } = req.body;
}