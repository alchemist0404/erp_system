const { Schema, model } = require('mongoose');

const getExpireTime = () => {
	return new Date().getTime() + 3 * 24 * 3600 * 1000;
}

const sessionsSchema = new Schema({
	token: {
		type: String,
		require : true
	},
	expire_time: {
		type: String
	}
})

sessionsSchema.pre('save', function (next) {
	const session = this
	session.expire_time = getExpireTime();
	next()
})

sessionsSchema.methods.expireStatus = function (time) {
	return getExpireTime() >= parseInt(time)
}

const Sessions = model('sessions', sessionsSchema)

module.exports = Sessions