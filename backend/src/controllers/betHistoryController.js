// const { Types } = require('mongoose');
const { BetHistory } = require('../model');

function addBetHistory(customer_id, game_id, bet_amount, win_amount, date = new Date()) {
    var bet_history = new BetHistory({ customer_id, game_id, bet_amount, win_amount, date, });
    bet_history.save((err) => {
        if (err) console.log("An error occurred in adding the betting history :>> ", err);
    })
}

const getBetHistory = async (req, res) => {
    var bet_histories = await BetHistory.find({}).populate({ path:"customer_id", select:"firstName" }).populate({ path: "game_id", select: "name" });
    console.log('bet_histories :>> ', bet_histories);
    res.json({
        status: true,
        data: bet_histories
    })
}

module.exports = {
    getBetHistory,
    addBetHistory
}