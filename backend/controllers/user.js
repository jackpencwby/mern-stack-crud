const User = require("../models/user");
const Account = require("../models/account");

async function getAdminData(req, res) {
    try {
        let adminData = [];

        const adminAccount = await Account.find({ role: "admin" }).exec();

        for (let account of adminAccount) {
            const data = await User.findOne({ _id: account.userId }).exec();
            const { email, password, role } = account;
            adminData.push({ ...data._doc, email, password, role });
        }

        res.status(200).json(adminData);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: error.message
        });
    }
}

async function getUserData(req, res) {
    try {
        let userData = [];

        const userAccount = await Account.find({ role: "general" }).exec();

        for (let account of userAccount) {
            const data = await User.findOne({ _id: account.userId }).exec();
            const { email, password, role } = account;
            userData.push({ ...data._doc, email, password, role });
        }

        res.status(200).json(userData);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: error.message
        });
    }
}

async function changeRole(req, res) {
    try {
        const id = req.query.id;

        const account = await Account.findOne({ userId: id }).exec();
        if (account.role === "admin") {
            await Account.updateOne({ userId: id }, { $set: { role: "general" } }).exec();
        }
        else {
            await Account.updateOne({ userId: id }, { $set: { role: "admin" } }).exec();
        }

        res.status(200).json({ message: "Update Successfully" });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = { getAdminData, getUserData, changeRole };