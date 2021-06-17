const { Types } = require('mongoose');
const { Profit } = require('../model');

const addProfit = async (req, res) => {
  try {
    var profitData = await Profit.findOne({
      game_id: Types.ObjectId(req.body.game_id), 
      customer_id: Types.ObjectId(req.body.customer_id)
    })

    if(profitData === null) {
      await Profit.create(req.body)
      res.json({ status: true, msg: "Game have been added successfuly." })
    } else {
      res.json({ status: true, msg: "Game have been already added." })
    }
  } catch (err) {
    console.log(err)
    res.json({ status: false, msg: "Something weng wrong." })
  }
};

const getAllProfits = async (req, res) => {
  try {
    let profit = await Profit.aggregate([
      {
        $lookup: {
          from: "customers",
          localField: "customer_id",
          foreignField: "_id",
          as: "customerData"
        }
      },
      {
        $unwind: "$customerData"
      },
      {
        $lookup: {
          from: "games",
          localField: "game_id",
          foreignField: "_id",
          as: "gameData"
        }
      },
      {
        $unwind: "$gameData"
      }
    ])
    res.json({
      status: true,
      data: profit
    })
  } catch (err) {
    console.log(err);
    res.json({ status: false })
  }
};

const getProfits = async (req, res) => {
  try {
    let profit = await Profit.aggregate([
      {
        $lookup: {
          from: "customers",
          localField: "customer_id",
          foreignField: "_id",
          as: "customerData"
        }
      },
      {
        $unwind: "$customerData"
      },
      {
        $lookup: {
          from: "games",
          localField: "game_id",
          foreignField: "_id",
          as: "gameData"
        }
      },
      {
        $unwind: "$gameData"
      },
      {
        $match: { 
          $and:[
            { customer_id : Types.ObjectId(req.params.id) }
          ]
        }
      }
    ])
    res.json({
      status: true,
      data: profit
    })
  } catch (err) {
    res.json({ status: false })
  }
};

const updateProfit = async (req, res) => {
  try {
    await Profit.findByIdAndUpdate(Types.ObjectId(req.params.id), req.body)
    res.json({ status: true })
  } catch (err) {
    res.json({ status: false })
  }
};

const deleteProfit = async (req, res) => {
  try {
    await Profit.deleteOne({ _id: Types.ObjectId(req.params.id) })
    res.json({ status: true })
  } catch (err) {
    res.json({ status: false })
  }
};

const deleteMultiProfits = async (req, res) => {
  try {
    for (const idIndex in req.body) {
      await Profit.deleteOne({ _id: Types.ObjectId(req.body[idIndex]) })
    }
    res.json({ status: true })
  } catch (err) {
    res.json({ status: false })
  }
};

module.exports = {
  addProfit: addProfit,
  getProfits: getProfits,
  getAllProfits: getAllProfits,
  updateProfit: updateProfit,
  deleteMultiProfits: deleteMultiProfits,
  deleteProfit: deleteProfit
}