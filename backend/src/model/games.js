const { Schema, model, Types } = require('mongoose');

const gamesSchema = new Schema({
	customer_id: {
		type: Types.ObjectId
	},
	name: {
		type: String
	},
	route: {
		type: String
	},
	type: {
		type: String
	},
	win_percentage: {
		type: Number
	}
})

const Games = model('games', gamesSchema)

module.exports = Games