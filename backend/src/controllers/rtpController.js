const { Types } = require('mongoose');
const { Rtp } = require('../model');

const addRtp = async (req, res) => {
  try {
    await Rtp.create(req.body)
    res.json({ status: true })
  } catch (err) {
    res.json({ status: false })
  }
};

const getRtp = async (req, res) => {
  try {
    // let rtp = await Rtp.find({}).populate({ path: 'game_id' })
    let rtp = await Rtp.aggregate([
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
    ])

    res.json({
      status: true,
      data: rtp
    })
  } catch (err) {
    res.json({ status: false })
  }
};

const updateRtp = async (req, res) => {
  try {
    await Rtp.findByIdAndUpdate(Types.ObjectId(req.params.id), req.body)
    res.json({ status: true })
  } catch (err) {
    res.json({ status: false })
  }
};

const deleteRtp = async (req, res) => {
  try {
    await Rtp.deleteOne({ game_id: Types.ObjectId(req.params.id) })
    res.json({ status: true })
  } catch (err) {
    res.json({ status: false })
  }
};

const deleteMultiRtps = async (req, res) => {
  try {
    for (const idIndex in req.body) {
      await Rtp.deleteOne({ game_id: Types.ObjectId(req.body[idIndex]) })
    }
    res.json({ status: true })
  } catch (err) {
    res.json({ status: false })
  }
};

module.exports = {
  addRtp: addRtp,
  getRtp: getRtp,
  updateRtp: updateRtp,
  deleteMultiRtps: deleteMultiRtps,
  deleteRtp: deleteRtp
}