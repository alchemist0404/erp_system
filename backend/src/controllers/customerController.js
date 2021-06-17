const { Types } = require('mongoose');
const { Customers } = require('../model');

const addCustomer = async (req, res) => {
  try {
    await Customers.create(req.body)
    res.json({ status: true })
  } catch (err) {
    res.json({ status: false, msg: "Something weng wrong." })
  }
};

const getCustomer = async (req, res) => {
  try {
    var games = await Customers.find({});
    res.json({
      status: true,
      data: games
    })
  } catch (err) {
    res.json({ status: false })
  }
};

const updateCustomer = async (req, res) => {
  try {
    await Customers.findByIdAndUpdate(Types.ObjectId(req.params.id), req.body)
    res.json({ status: true })
  } catch (err) {
    res.json({ status: false })
  }
};

const deleteCustomer = async (req, res) => {
  try {
    await Customers.deleteOne({ _id: Types.ObjectId(req.params.id) })
    res.json({ status: true })
  } catch (err) {
    res.json({ status: false })
  }
};

const deleteMultiCustomers = async (req, res) => {
  try {
    for (const idIndex in req.body) {
      await Customers.deleteOne({ _id: Types.ObjectId(req.body[idIndex]) })
    }
    res.json({ status: true })
  } catch (err) {
    res.json({ status: false })
  }
};

module.exports = {
  addCustomer: addCustomer,
  getCustomer: getCustomer,
  updateCustomer: updateCustomer,
  deleteMultiCustomers: deleteMultiCustomers,
  deleteCustomer: deleteCustomer
}