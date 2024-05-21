const { User } = require("../models/user");
const { Account } = require("../models/account");

async function getAdminData(req, res) {
    try {
        let adminData = [];

        const adminAccount = await Account.find({ role: "admin" });

        for (const account of adminAccount) {
            const data = await User.findOne({ _id: account.userId });
            const { email, password } = account;
            adminData.push({ ...data._doc, email, password });
        }

        res.status(200).json(adminData);
    }
    catch (err) {
        console.error(err.message);
    }
}

async function getUserData(req, res) {
    try {
        let userData = [];

        const userAccount = await Account.find({ role: "general" });

        for (const account of userAccount) {
            const data = await User.findOne({ _id: account.userId });
            const { email, password } = account;
            userData.push({ ...data._doc, email, password });
        }

        res.status(200).json(userData);
    }
    catch (err) {
        console.error(err.message);
    }
}

module.exports = { getAdminData, getUserData };