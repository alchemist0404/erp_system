const mongoose = require("mongoose")
const config = require("../../config")

const mongooseConfig = () => {
    mongoose.connect(config.testdb, { useNewUrlParser: true ,useFindAndModify: false,useUnifiedTopology: true,useCreateIndex : true}).then(() => {
        console.log('Database is connected');
    })
}

module.exports = mongooseConfig