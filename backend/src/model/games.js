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
	win_occurrence: {
		type: Number
	},
	lose_occurrence: {
		type: Number
	},
	min: {
		type: Number
	},
	max: {
		type: Number
	}
})

const Games = model('games', gamesSchema)

module.exports = Games