require("dotenv").config();
const { SIGNATURE } = process.env;
const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
    try {
        let authToken = req.cookies.token;
        await jwt.verify(authToken, SIGNATURE);
        next();
    }
    catch(err) {
        console.error(err.message);
        res.status(401).json({message: err.message});
    }
};