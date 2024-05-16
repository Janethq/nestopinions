const express = require("express");
const router = express.Router();
const { test, registerUser } = require("../../controllers/authController");

// /api/users
router.get("/", test); //bruno --> testing
router.post("/register", registerUser);

module.exports = router;
