const express = require("express");
const { register, login } = require("../controllers/auth");
const { checkUserRole } = require("../util/checkUserRole");

const router = express.Router();

// http://localhost:8000/api/auth/register
router.post("/register", register);

// http://localhost:8000/api/auth/register
router.post("/login", login);

// http://localhost:8000/api/auth/checkUserRole
router.get("/checkUserRole", checkUserRole);

module.exports.auth_router = router;
 