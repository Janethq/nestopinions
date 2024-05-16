const express = require("express");
const router = express.Router();
const { test } = require("../../controllers/authController");

// /users
router.get("/", test); //bruno --> testing

module.exports = router;
