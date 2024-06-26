require("dotenv").config();
const jwt = require("jsonwebtoken");

async function auth(req, res, next) {
    try {
        const token = req.cookies.token;
        await jwt.verify(token, process.env.SIGNATURE);
        next();
    }
    catch (error) {
        console.error(error.message);
        res.status(401).json({
            message: error.message
        });
    }
};

module.exports = auth;