require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        await mongoose.connect(CONNECTION_STRING);
        console.log("Connect to database successfully");
    }
    catch (err) {
        console.error(err.message);
    }
}

module.exports.connectDatabase = connectDatabase;