const express = require("express");
const { getAdminData, getUserData, changeRole } = require("../controllers/user");
const auth = require("../middleware/auth");
const access = require("../middleware/access");

const router = express.Router();

// http://localhost:8000/api/user/getAdminData
router.get("/getAdminData", auth, access, getAdminData);

// http://localhost:8000/api/user/getUserData
router.get("/getUserData", auth, access, getUserData);

// http://localhost:8000/api/user/changeRole
router.get("/changeRole", auth, access, changeRole);

module.exports = router;