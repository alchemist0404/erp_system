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

const manageNormalGame = async (req, res) => {

  var updateData = {}, occurrence = 0, occurrence_type = 'lose';

  try {
    var re_data = req.body;
    var randomNumber = Number(re_data.randomNumber)

    var gameData = await Games.findById(Types.ObjectId(re_data.gameId))
    var customerData = await Customers.findById(Types.ObjectId(re_data.customerId))
    var profitData = await Profit.findOne({ customer_id: Types.ObjectId(re_data.customerId), game_id: Types.ObjectId(re_data.gameId) })
    var rtpData = await Rtp.findOne({ game_id: Types.ObjectId(re_data.gameId) })

    var betAmount = Number(re_data.betAmount)
    var winAmount = Number(re_data.winAmount)

    var allprofit = betAmount * (100 - Number(rtpData.rtp)) / 100;
    var provider_profit = profitData.provider_profit + allprofit * customerData.providerProfit / 100;
    var customer_profit = profitData.customer_profit + allprofit - allprofit * customerData.providerProfit / 100;
    var game_bank = 0;
    // var hookreturndata = await sendHook()

    // game bank is lower than win amount
    if (profitData.game_bank < (winAmount + allprofit)) {

      game_bank = profitData.game_bank + betAmount - allprofit;
      updateData = {
        provider_profit: provider_profit,
        customer_profit: customer_profit,
        game_bank: game_bank
      };
      if (re_data.tie === 'true') {
        occurrence_type = 'lose'
        occurrence = 100;
      } else {
        occurrence_type = 'win'
        occurrence = 0;
      }

      // game bank is higher than win amount
    } else {

      // game tie exists
      if (re_data.tie === 'true') {

        // user lose
        if (randomNumber > 100 - gameData.lose_occurrence) {
          game_bank = profitData.game_bank + betAmount - allprofit;
          updateData = {
            provider_profit: provider_profit,
            customer_profit: customer_profit,
            game_bank: game_bank
          };
          occurrence_type = 'lose'
          occurrence = 100;

          // user win
        } else if (randomNumber > 100 - gameData.lose_occurrence - gameData.win_occurrence) {
          game_bank = profitData.game_bank - winAmount - allprofit;
          updateData = {
            provider_profit: provider_profit,
            customer_profit: customer_profit,
            game_bank: game_bank
          };
          occurrence_type = 'win'

          // game tied
        } else {
          occurrence_type = 'tie'
        }

        // game tie no exists
      } else {

        // user win
        if (randomNumber < gameData.win_occurrence) {
          game_bank = profitData.game_bank - winAmount - allprofit;
          updateData = {
            provider_profit: provider_profit,
            customer_profit: customer_profit,
            game_bank: game_bank
          };
          occurrence_type = 'win'
          occurrence = gameData.win_occurrence;

          // user lose
        } else {
          game_bank = profitData.game_bank + betAmount - allprofit;
          updateData = {
            provider_profit: provider_profit,
            customer_profit: customer_profit,
            game_bank: game_bank
          };
          occurrence_type = 'win'
          occurrence = 0;
        }
      }
    }
    await Profit.updateMany({ customer_id: Types.ObjectId(re_data.customerId), game_id: Types.ObjectId(re_data.gameId) }, updateData)
    res.json({
      occurrence_type: occurrence_type,
      occurrence: occurrence,
      gameStatus: true
    })
  } catch (err) {
    console.log(err)
    res.json({
      occurrence_type: null,
      occurrence: 0,
      gameStatus: true
    })
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
    if (profitData.game_bank < (betNum + allprofit)) {
      game_bank = profitData.game_bank + betNum - allprofit;
      updateData = {
        provider_profit: provider_profit,
        customer_profit: customer_profit,
        game_bank: game_bank
      };
      occurrence = 0;
    } else {
      if (Number(re_data.randomNumber) < gameData.win_occurrence) {
        game_bank = profitData.game_bank - betNum - allprofit;
        updateData = {
          provider_profit: provider_profit,
          customer_profit: customer_profit,
          game_bank: game_bank
        };
        occurrence = gameData.win_occurrence;
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
      gameStatus: false
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
    const { customerId, gameId, bets, randomNumber, betNumber } = req.body;

    const gameData = await Games.findById(Types.ObjectId(gameId))
    const customerData = await Customers.findById(Types.ObjectId(customerId))
    const profitData = await Profit.findOne({ customer_id: Types.ObjectId(customerId), game_id: Types.ObjectId(gameId) })
    const rtpData = await Rtp.findOne({ game_id: Types.ObjectId(gameId) })

    const factors = [8, 1.95, 2]
    const total_amount = bets.reduce((a, b) => { return Number(a) + Number(b) }, 0)
    const bets_arr = [bets[0] * factors[0], bets[1] * factors[1], bets[2] * factors[2]]

    const max_amount = Math.max.apply(null, bets_arr)
    const min_amount = Math.min.apply(null, bets_arr)
    const max_index = bets_arr.indexOf(String(max_amount))

    const all_profit = total_amount * (100 - Number(rtpData.rtp)) / 100
    const provider_profit = profitData.provider_profit + all_profit * customerData.providerProfit / 100
    const customer_profit = profitData.customer_profit + all_profit - all_profit * customerData.providerProfit / 100

    var updateData = {}, re_bets = [0, 0, 0], win_percent = 0;

    var game_bank = 0;
    console.log('--------------------------------------');
    if (Number(randomNumber) > gameData.win_occurrence) {  //////////////  user lose
      if (Number(betNumber) === 3) {
        var n_index = null
        // do n_index = Math.floor(Math.random() * 3);
        // while (profitData.game_bank > (bets[n_index] + all_profit));

        var win_arr = bets_arr.filter((val, index) => (Number(val) - Number(bets[index]) + all_profit) < profitData.game_bank)
        if (win_arr.length == 0) {
          n_index = bets_arr.indexOf(min_amount)
        } else {
          var win_val = win_arr[Math.floor(Math.random() * win_arr.length)]
          n_index = bets_arr.indexOf(win_val)
        }

        console.log("you lose but you bets 3 so you win " + n_index);

        re_bets[n_index] = Number(bets[n_index]);
        win_percent = 100;
        game_bank = profitData.game_bank + (total_amount - Number(bets_arr[n_index])) - all_profit

      } else {
        console.log("you lost because random number is big");
        re_bets = [Number(bets[0]), Number(bets[1]), Number(bets[2])]
        game_bank = profitData.game_bank + total_amount - all_profit
      }
    } else {                                              ///////////////   user won
      var win_arr = bets_arr.filter((val, index) => Number(val) !== 0 && (Number(val) - Number(bets[index]) + all_profit) < profitData.game_bank)
      if (win_arr.length === 0) {

        console.log("you won but game bank has not enough money so you lost");

        re_bets = [Number(bets[0]), Number(bets[1]), Number(bets[2])]
        game_bank = profitData.game_bank + total_amount - all_profit

      } else {
        var win_val = win_arr[Math.floor(Math.random() * win_arr.length)]
        var win_index = bets_arr.indexOf(win_val)

        console.log("congratulations! you won " + win_index);

        re_bets[win_index] = Number(bets[win_index]);
        win_percent = 100;
        console.log('total_amount :>> ', total_amount, Number(bets_arr[win_index]), all_profit);
        game_bank = profitData.game_bank + (total_amount - Number(bets_arr[win_index])) - all_profit;

      }
    }

    console.log('re_bets :>> ', re_bets, win_percent);

    updateData = {
      provider_profit: provider_profit,
      customer_profit: customer_profit,
      game_bank: game_bank
    };

    console.log('updateData :>> ', updateData);

    await Profit.updateMany({ customer_id: Types.ObjectId(customerId), game_id: Types.ObjectId(gameId) }, updateData)
    res.json({
      win_percent,
      re_bets,
      gameStatus: true
    })
  } catch (err) {
    res.json({
      flag: false,
      gameStatus: false
    })
  }
};

const checkBlackjackGameBank = async (req, res) => {
  const { customerId, gameId, randomNumber, current_bet } = req.body;

  const gameData = await Games.findById(Types.ObjectId(gameId))
  const profitData = await Profit.findOne({ customer_id: Types.ObjectId(customerId), game_id: Types.ObjectId(gameId) })
  const rtpData = await Rtp.findOne({ game_id: Types.ObjectId(gameId) })

  const all_profit = Number(current_bet) * (100 - Number(rtpData.rtp)) / 100

  var win_occurrence = 0;
  console.log("------------------------------------------");
  if (Number(randomNumber) > gameData.win_occurrence) {           //////////////// use lose money
    console.log("oops! you lose because you are not lucky~");
    win_occurrence = gameData.win_occurrence
  } else {                                                        //////////////// use win
    if ((Number(current_bet) + all_profit) < profitData.game_bank) {
      console.log("congratulations! you win~");
      win_occurrence = gameData.win_occurrence
    } else {
      console.log("opps! you lose because the game bank has not enough money~");
      win_occurrence = 0;
    }
  }

  res.json({
    occurrence: win_occurrence,
    gameStatus: true
  })
}

const updateBlackjackGameBank = async (req, res) => {
  const { customerId, gameId, is_win, current_bet } = req.body;

  const customerData = await Customers.findById(Types.ObjectId(customerId))
  const profitData = await Profit.findOne({ customer_id: Types.ObjectId(customerId), game_id: Types.ObjectId(gameId) })
  const rtpData = await Rtp.findOne({ game_id: Types.ObjectId(gameId) })

  const all_profit = Number(current_bet) * (100 - Number(rtpData.rtp)) / 100
  const provider_profit = profitData.provider_profit + all_profit * customerData.providerProfit / 100
  const customer_profit = profitData.customer_profit + all_profit - all_profit * customerData.providerProfit / 100

  var game_bank = 0, update_data = {}

  if (is_win == "true") {
    game_bank = profitData.game_bank - Number(current_bet) - all_profit
  } else {
    game_bank = profitData.game_bank + Number(current_bet) - all_profit
  }

  update_data = {
    provider_profit: provider_profit,
    customer_profit: customer_profit,
    game_bank: game_bank
  };

  console.log('profitData.game_bank :>> ', profitData.game_bank);

  await Profit.updateMany({ customer_id: Types.ObjectId(customerId), game_id: Types.ObjectId(gameId) }, update_data)
  res.json({
    gameStatus: true
  })

}

const checkCrapsGameBank = async (req, res) => {
  console.log("--------------------------------------------------");
  const { customerId, gameId, randomNumber, bets } = req.body;

  const gameData = await Games.findById(Types.ObjectId(gameId))
  const profitData = await Profit.findOne({ customer_id: Types.ObjectId(customerId), game_id: Types.ObjectId(gameId) })
  const rtpData = await Rtp.findOne({ game_id: Types.ObjectId(gameId) })

  var total_amount = 0;

  for (var key in bets) {
    total_amount = total_amount + Number(bets[key]);
  }

  const all_profit = Number(total_amount) * (100 - Number(rtpData.rtp)) / 100;

  var win_occurrence = 0; var re_obj = {}

  if (Number(randomNumber) > gameData.win_occurrence) {
    win_occurrence = 0;
    console.log("random number is big");
  } else {
    var win_arr = []
    for (var key in bets) {
      if (Number(bets[key]) + all_profit < profitData.game_bank) {
        win_arr.push(String(key))
      }
    }
    if (win_arr.length > 0) {
      console.log("you won");
      for (var key in bets) {
        if (win_arr.includes(key)) {
          re_obj[key] = bets[key]
        }
      }
      win_occurrence = gameData.win_occurrence
    } else {
      win_occurrence = 0;
      console.log("you won but bank has not enough money");
    }
  }

  res.json({
    win_occurrence,
    data: re_obj,
    gameStatus: true
  })
}

const checkJackorBetterGameBank = async (req, res) => {
  const { customerId, gameId, randomNumber, bet_amount } = req.body;

  const gameData = await Games.findById(Types.ObjectId(gameId))
  const profitData = await Profit.findOne({ customer_id: Types.ObjectId(customerId), game_id: Types.ObjectId(gameId) })
  const rtpData = await Rtp.findOne({ game_id: Types.ObjectId(gameId) })
  const all_profit = Number(bet_amount) * (100 - Number(rtpData.rtp)) / 100;

  const high_cards = [1, 2, 3, 4, 6, 9, 25, 50, 250];

  var availables = [], win_occurrence = 0;

  for (let i = 0; i < high_cards.length; i++) {
    var amount = Number(bet_amount) * high_cards[i]
    if (amount + all_profit < profitData.game_bank) {
      availables.push(high_cards[i])
    }
  }

  if (Number(randomNumber) > gameData.win_occurrence) {
    win_occurrence = 0
    console.log("oops! you are not lucky!");
  } else {
    if (availables.length > 0) {
      win_occurrence = gameData.win_occurrence
      console.log("you won!");
    } else {
      win_occurrence = 0
      console.log("oops! the bank has not enough money");
    }
  }

  res.json({
    win_occurrence,
    data: availables,
    gameStatus: true
  })
}

const updateJackorBetterGameBank = async (req, res) => {
  const { customerId, gameId, win_amount, bet_amount } = req.body;

  const customerData = await Customers.findById(Types.ObjectId(customerId))
  const profitData = await Profit.findOne({ customer_id: Types.ObjectId(customerId), game_id: Types.ObjectId(gameId) })
  const rtpData = await Rtp.findOne({ game_id: Types.ObjectId(gameId) })

  const all_profit = Number(bet_amount) * (100 - Number(rtpData.rtp)) / 100
  const provider_profit = profitData.provider_profit + all_profit * customerData.providerProfit / 100
  const customer_profit = profitData.customer_profit + all_profit - all_profit * customerData.providerProfit / 100

  var game_bank = 0, update_data = {}

  game_bank = profitData.game_bank - (Number(win_amount) - Number(bet_amount)) - all_profit;

  update_data = {
    provider_profit: provider_profit,
    customer_profit: customer_profit,
    game_bank: game_bank
  };

  console.log('game_bank :>> ', game_bank);

  await Profit.updateMany({ customer_id: Types.ObjectId(customerId), game_id: Types.ObjectId(gameId) }, update_data)
  res.json({
    gameStatus: true
  })
}

module.exports = {
  addGame,
  getGame,
  getGameById,
  getByRouteGame,
  updateGame,
  deleteMultiGames,
  deleteGame,
  manageGamehilow,
  manageGameameroullete,
  manageGamebaccarat,
  checkBlackjackGameBank,
  manageNormalGame,
  updateBlackjackGameBank,
  checkCrapsGameBank,
  checkJackorBetterGameBank,
  updateJackorBetterGameBank
}