const express = require("express");
const router = express.Router();
const {
  test,
  registerUser,
  loginUser,
} = require("../../controllers/authController");

// /api/users
router.get("/", test); //bruno --> testing
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
