const { Schema, model, Types } = require('mongoose');

const betHistorySchema = new Schema({
	customer_id: {
		type: Types.ObjectId, required: true, ref: 'customers'
	},
	game_id: {
		type: Types.ObjectId, required: true, ref: 'games'
	},
    bet_amount: {
        type: Number, required: true
    },
    win_amount: {
        type: Number, required: true
    },
    date: {
        type: Date, default: Date.now()
    },
})

const betHistory = model('betHistory', betHistorySchema)

module.exports = betHistory