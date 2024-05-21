require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.authenticateToken = async (req, res) => {
    try {
        let authToken = req.cookies.token;
        let { fullname, role } = await jwt.verify(authToken, process.env.SIGNATURE);
        res.json({
            fullname,
            role
        });
    }
    catch(err) {
        console.error(err.message);
        res.status(401).json({message: err.message});
    }
};

