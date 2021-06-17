const { Schema, model } = require('mongoose');

const customersSchema = new Schema({
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	phoneNumber: {
		type: String
	},
	email: {
		type: String
	},
	providerProfit: {
		type: Number
	}
})

const Customers = model('customers', customersSchema)

module.exports = Customers