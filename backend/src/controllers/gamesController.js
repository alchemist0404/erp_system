const { Types } = require('mongoose');
const { Games, Rtp, Profit, Customers } = require('../model');
const fs = require('fs')
const { DIR } = require('../../config')
const sendHook = require('./axiosController')

const addGame = async (req, res) => {
  try {
    var fileExists = fs.existsSync(DIR + `/src/games/${req.body.route}/index.html`)
    if (fileExists) {
      var gameData = await Games.create(req.body)
      await Rtp.create({
        game_id: gameData._id,
        rtp: process.env.Default_RTP
      })
      res.json({ status: true })
    } else {
      res.json({ status: false, msg: "Please input the correct route." })
    }
  } catch (err) {
    res.json({ status: false, msg: "Something weng wrong." })
  }
};

const getGame = async (req, res) => {
  try {
    var games = await Games.find({});
    res.json({
      status: true,
      data: games
    })
  } catch (err) {
    res.json({ status: false })
  }
};

const getGameById = async (req, res) => {
  try {
    var games = await Games.findById(Types.ObjectId(req.params.id));
    res.json({
      status: true,
      data: games
    })
  } catch (err) {
    res.json({ status: false })
  }
};

const getByRouteGame = async (req, res) => {
  try {
    var game = await Games.findOne({ route: req.body.route });
    res.json({
      status: true,
      data: game
    })
  } catch (err) {
    res.json({ status: false })
  }
};

const updateGame = async (req, res) => {
  try {
    await Games.findByIdAndUpdate(Types.ObjectId(req.params.id), req.body)
    res.json({ status: true })
  } catch (err) {
    res.json({ status: false })
  }
};

const deleteGame = async (req, res) => {
  try {
    await Games.deleteOne({ _id: Types.ObjectId(req.params.id) })
    res.json({ status: true })
  } catch (err) {
    res.json({ status: false })
  }
};

const deleteMultiGames = async (req, res) => {
  try {
    for (const idIndex in req.body) {
      await Games.deleteOne({ _id: Types.ObjectId(req.body[idIndex]) })
    }
    res.json({ status: true })
  } catch (err) {
    res.json({ status: false })
  }
};

const manageGamehilow = async (req, res) => {
  try {
    var re_data = req.body;
    var gameData = await Games.findById(Types.ObjectId(re_data.gameId))

    var customerData = await Customers.findById(Types.ObjectId(re_data.customerId))
    var profitData = await Profit.findOne({ customer_id: Types.ObjectId(re_data.customerId), game_id: Types.ObjectId(re_data.gameId) })
    var rtpData = await Rtp.findOne({ game_id: Types.ObjectId(re_data.gameId) })

    var betNum = Number(re_data.betAmount)

    var allprofit = betNum * (100 - Number(rtpData.rtp)) / 100;
    var provider_profit = profitData.provider_profit + allprofit * customerData.providerProfit / 100;
    var customer_profit = profitData.customer_profit + allprofit - allprofit * customerData.providerProfit / 100;
    var game_bank = 0;
    var updateData = {}, occurrence = 0;
    // var hookreturndata = await sendHook()
    if (profitData.game_bank < (betNum * 2 + allprofit)) {
      game_bank = profitData.game_bank + betNum - allprofit;
      updateData = {
        provider_profit: provider_profit,
        customer_profit: customer_profit,
        game_bank: game_bank
      };
      occurrence = 0;
    } else {
      if (Number(re_data.randomNumber) < gameData.win_percentage) {
        game_bank = profitData.game_bank - 2 * betNum - allprofit;
        updateData = {
          provider_profit: provider_profit,
          customer_profit: customer_profit,
          game_bank: game_bank
        };
        occurrence = gameData.win_percentage;
      } else {
        game_bank = profitData.game_bank + betNum - allprofit;
        updateData = {
          provider_profit: provider_profit,
          customer_profit: customer_profit,
          game_bank: game_bank
        };
        occurrence = 0;
      }
    }
    await Profit.updateMany({ customer_id: Types.ObjectId(re_data.customerId), game_id: Types.ObjectId(re_data.gameId) }, updateData)
    res.json({
      occurrence: occurrence,
      gameStatus: true
    })
  } catch (err) {
    res.json({
      occurrence: 0,
      gameStatus: true
    })
  }
};

const manageGameameroullete = async (req, res) => {
  try {
    var re_data = req.body;
    // var gameData = await Games.findById(Types.ObjectId(re_data.gameId))

    var customerData = await Customers.findById(Types.ObjectId(re_data.customerId))
    var profitData = await Profit.findOne({ customer_id: Types.ObjectId(re_data.customerId), game_id: Types.ObjectId(re_data.gameId) })
    var rtpData = await Rtp.findOne({ game_id: Types.ObjectId(re_data.gameId) })

    var betNum = Number(re_data.betAmount)

    var allprofit = betNum * (100 - Number(rtpData.rtp)) / 100;
    var provider_profit = profitData.provider_profit + allprofit * customerData.providerProfit / 100;
    var customer_profit = profitData.customer_profit + allprofit - allprofit * customerData.providerProfit / 100;
    var game_bank = 0;
    var updateData = {}, flag = false;

    // var hookreturndata = await sendHook()
    if (profitData.game_bank < (Number(re_data.totalPrice) + allprofit)) {
      game_bank = profitData.game_bank + betNum - allprofit;
      updateData = {
        provider_profit: provider_profit,
        customer_profit: customer_profit,
        game_bank: game_bank
      };
      flag = false;
    } else {
      game_bank = profitData.game_bank - Number(re_data.totalPrice) - allprofit;
      updateData = {
        provider_profit: provider_profit,
        customer_profit: customer_profit,
        game_bank: game_bank
      };
      flag = true;
    }
    await Profit.updateMany({ customer_id: Types.ObjectId(re_data.customerId), game_id: Types.ObjectId(re_data.gameId) }, updateData)
    res.json({
      flag: flag,
      gameStatus: true
    })
  } catch (err) {
    res.json({
      flag: false,
      gameStatus: true
    })
  }
};
const manageGamebaccarat = async (req, res) => {
  try {
    var re_data = req.body;
    // var gameData = await Games.findById(Types.ObjectId(re_data.gameId))

    var customerData = await Customers.findById(Types.ObjectId(re_data.customerId))
    var profitData = await Profit.findOne({ customer_id: Types.ObjectId(re_data.customerId), game_id: Types.ObjectId(re_data.gameId) })
    var rtpData = await Rtp.findOne({ game_id: Types.ObjectId(re_data.gameId) })

    var betNum = Number(re_data.betAmount)

    var allprofit = betNum * (100 - Number(rtpData.rtp)) / 100;
    var provider_profit = profitData.provider_profit + allprofit * customerData.providerProfit / 100;
    var customer_profit = profitData.customer_profit + allprofit - allprofit * customerData.providerProfit / 100;
    var game_bank = 0;
    var updateData = {}, flag = false;

    // var hookreturndata = await sendHook()
    if (profitData.game_bank < (Number(re_data.totalPrice) + allprofit)) {
      game_bank = profitData.game_bank + betNum - allprofit;
      updateData = {
        provider_profit: provider_profit,
        customer_profit: customer_profit,
        game_bank: game_bank
      };
      flag = false;
    } else {
      game_bank = profitData.game_bank - Number(re_data.totalPrice) - allprofit;
      updateData = {
        provider_profit: provider_profit,
        customer_profit: customer_profit,
        game_bank: game_bank
      };
      flag = true;
    }
    await Profit.updateMany({ customer_id: Types.ObjectId(re_data.customerId), game_id: Types.ObjectId(re_data.gameId) }, updateData)
    res.json({
      flag: flag,
      gameStatus: true
    })
  } catch (err) {
    res.json({
      flag: false,
      gameStatus: true
    })
  }
};

module.exports = {
  addGame: addGame,
  getGame: getGame,
  getGameById: getGameById,
  getByRouteGame: getByRouteGame,
  updateGame: updateGame,
  deleteMultiGames: deleteMultiGames,
  deleteGame: deleteGame,
  manageGamehilow: manageGamehilow,
  manageGameameroullete: manageGameameroullete,
  manageGamebaccarat: manageGamebaccarat,
}