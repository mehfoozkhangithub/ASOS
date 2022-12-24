const mongoose = require("mongoose")
require("dotenv").config()

mongoose.set("strictQuery", true);

const connect = () => {
    return mongoose.connect(process.env.mongoDB_URL)
}

module.exports = {connect}