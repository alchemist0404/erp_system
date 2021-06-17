const { Schema, model, Types } = require('mongoose');

const profitSchema = new Schema({
	customer_id: {
		type: Types.ObjectId
	},
	game_id: {
		type: Types.ObjectId
	},
    game_bank: {
        type: Number
    },
    customer_profit: {
        type: Number
    },
    provider_profit: {
        type: Number
    },
    status: {
        type: Boolean
    }
})

const Profit = model('profit', profitSchema)

module.exports = Profit