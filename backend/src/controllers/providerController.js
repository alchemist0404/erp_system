const axiosController = require('./axiosController');
const customerModel = require('../model/customers');
const endPoints = require('../configuration/endpoints');

exports.playerAuthenticate = async (req, res) => {
    // axiosController.sendHook("")
    const { customer_id } = req.body;

    const { endpoints } = await customerModel.findOne({ _id: Types.ObjectId(customer_id) })
    console.log(`endpoints`, endpoints.auth)

    const data = await axiosController.sendHook(endpoints.auth, {})
}

exports.actionBetPlayerAuthenticate = async (req, res) => {
    const data = await axiosController.sendHook(`${endPoints.ACTION_BET}/GetPlayerInfo?Player=${req.body.playerName}&IdUser=${req.body.userId}`, "GET")
    if (!data) {
        return res.json({
            status: false,
            data: "User is not authorized!"
        })
    } else {
        return res.json({
            status: true,
            data
        })
    }
}

exports.actionBetPlayerBalance = async (req, res) => {
    const data = await axiosController.sendHook(`${endPoints.ACTION_BET}/GetPlayerBalanceByPlayer?Player=${req.body.Player}`, "GET")
    if (!data) {
        return res.json({
            status: false,
            data: "Something went wrong! Please try again later."
        })
    } else {
        return res.json({
            status: true,
            data
        })
    }
}

exports.actionBetPlayerBalanceUpdate = async (player, amount, type) => {
    const data = await axiosController.sendHook(`${endPoints.ACTION_BET}/InsertTransactionByPlayer`, "POST", {
        Player: player,
        Description: type === "R" ? "Receipt Player Balance" : "Disbursment Player Balance",
        Amount: amount,
        Reference: "762323",
        TransactionDate: new Date(),
        TransactionType: type
    })
    console.log(`data`, data)
    if (!data) {
        return false
    } else {
        return data
    }
}