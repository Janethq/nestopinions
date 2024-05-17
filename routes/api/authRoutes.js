const express = require("express");
const router = express.Router();
const {
  test,
  registerUser,
  loginUser,
  checkToken,
} = require("../../controllers/authController");
const { verifyJWT } = require("../../src/utils/services/token");

// /api/users
router.get("/", test); //bruno --> testing
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/check-token", verifyJWT, checkToken);

module.exports = router;
