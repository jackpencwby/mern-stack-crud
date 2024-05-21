const express = require("express");
const { getAdminData, getUserData } = require("../controllers/user");
const { auth } = require("../middleware/auth");
const { access } = require("../middleware/access");

const router = express.Router();

// http://localhost:8000/api/user/getAdminData
router.get("/getAdminData", auth, access, getAdminData);

// http://localhost:8000/api/user/getUserData
router.get("/getUserData", auth, access, getUserData);

module.exports.user_router = router;