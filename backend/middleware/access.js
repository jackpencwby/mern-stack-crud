require("dotenv").config();
const jwt = require("jsonwebtoken");

async function access(req, res, next) {
    try {
        const authToken = req.cookies.token;
        const { role } = await jwt.verify(authToken, process.env.SIGNATURE);
        if (role !== "admin") {
            throw { statusCode: 401, message: "คุณไม่มีสิทธิ์เข้าถึงในการใช้ API เพราะคุณไม่ใช่ Admin" };
        }
        next();
    }
    catch (error) {
        const statusCode = error.statusCode || 500;
        const message = error.message || "Internal Server Error";
        console.error(error.message);
        res.status(statusCode).json({ message });
    }
};

module.exports = access;