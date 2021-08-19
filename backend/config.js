module.exports = {
	testdb: "mongodb://localhost:27017/games?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000",
	livedb: "mongodb://actiongame:actiongame123$@localhost:27731/actiongame?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-256",
	DIR: __dirname
}