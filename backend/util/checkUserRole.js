const jwt = require("jsonwebtoken");

exports.checkUserRole = async (req, res) => {
    try {
        let authToken = req.cookies.token;
        let { firstname, lastname, role } = await jwt.verify(authToken, "mysecret");
        res.json({
            firstname,
            lastname,
            role
        });
    }
    catch(err) {
        console.error(err.message);
        res.status(401).json({message: err.message});
    }
};
