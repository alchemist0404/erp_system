const Games = require("./games")
const Sessions = require("./sessions")
const Rtp = require("./rtp")
const Profit = require("./profit")
const Customers = require("./customers")
const Api = require("./api")
const BetHistory = require("./betHistory")

module.exports = {
	Games: Games,
	Sessions: Sessions,
	Customers: Customers,
	Profit: Profit,
	Rtp: Rtp,
	Api: Api,
	BetHistory
}