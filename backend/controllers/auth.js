require("dotenv").config();
const { SIGNATURE } = process.env;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Account } = require("../models/account");
const { User } = require("../models/user");

exports.register = async (req, res) => {
    try {
        const { fullname, birthday, phone_number, email, password, confirm_password } = req.body;

        console.log(req.body);

        if (!fullname || !birthday || !phone_number || !email || !password || !confirm_password) {
            throw { statusCode: 400, message: "Please enter complete information" };
        }

        const accountInDatabase = await Account.findOne({ email });
        if (accountInDatabase) {
            throw { statusCode: 400, message: "This email is already exist" };
        }
        if (password !== confirm_password) {
            throw { statusCode: 400, message: "Password doesn't match" };
        }

        const passwordHash = await bcrypt.hash(password, 10);

        console.log(passwordHash);

        const newUser = new User({
            fullname,
            birthday,
            phone_number
        });
        await newUser.save();

        const newAccount = new Account({
            email,
            password: passwordHash,
            role: "general",
            user: newUser._id
        });
        await newAccount.save();

        res.status(201).json({ message: "Register Successfully" });
    }
    catch (err) {
        let statusCode = err.statusCode || 500;
        let message = err.message || "Internal Server Error";
        console.error(err.message);
        res.status(statusCode).json({ message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw { statusCode: 400, message: "Please enter complete information" };
        }

        const accountInDatabase = await Account.findOne({ email });
        if (!accountInDatabase) {
            throw { statusCode: 400, message: "This email doesn't exist" };
        }
        const isMatch = await bcrypt.compare(password, accountInDatabase.password);
        if (!isMatch) {
            throw { statusCode: 400, message: "Wrong Password" };
        }

        const userInDatabase = await User.findOne({ _id: accountInDatabase.user });

        const payload = {
            fullname: userInDatabase.fullname,
            role: accountInDatabase.role
        };
        const secret = SIGNATURE;
        const token = await jwt.sign(payload, secret, { expiresIn: "1h" });
        res.cookie("token", token, {
            maxAge: 600000,
            secure: true,
            httpOnly: true,
            sameSite: "none"
        });

        res.status(200).json({
            message: "Login Successfully",
            role: accountInDatabase.role
        });
    }
    catch (err) {
        let statusCode = err.statusCode || 500;
        let message = err.message || "Internal Server Error";
        console.error(err.message);
        res.status(statusCode).json({ message });
    }
};

