require("dotenv").config();
const { SIGNATURE } = process.env;
const jwt = require("jsonwebtoken");

exports.access = async (req, res, next) => {
    try {
        let authToken = req.cookies.token;
        let { role } = await jwt.verify(authToken, SIGNATURE);
        if (role !== "admin") {
            throw { statusCode: 401, message: "คุณไม่มีสิทธิ์เข้าถึงในการใช้ API เพราะคุณไม่ใช่ Admin" };
        }
        next();
    }
    catch (err) {
        let statusCode = err.statusCode || 500;
        let message = err.message || "Internal Server Error";
        console.error(err.message);
        res.status(statusCode).json({ message });
    }
};
