const { Schema, model, Types } = require('mongoose');

const apiSchema = new Schema({
	customer_id: {
		type: Types.ObjectId
	},
	api_key: {
		type: String
	},
})

const Api = model('api', apiSchema)

module.exports = Api