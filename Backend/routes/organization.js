const express = require("express");
const { login, signup } = require("../controllers/organizationController");

const router = express.Router();

// Login
router.post("/login", login);

// Signup
router.post("/signup", signup);

module.exports = router;
