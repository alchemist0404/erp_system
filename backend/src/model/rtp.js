const { Types, Schema, model } = require('mongoose');

const rtpSchema = new Schema({
	game_id: {
		type: Types.ObjectId, ref: 'games'
	},
	rtp: {
		type: Number
	}
})

const Rtp = model('rtp', rtpSchema)

module.exports = Rtp