const express = require("express");
const router = express.Router();
const {
  test,
  registerUser,
  loginUser,
  checkToken,
  updatePassword,
} = require("../../controllers/authController");
const { verifyJWT } = require("../../config/verifyToken");

// /api/users
router.get("/", test); //bruno --> testing
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/check-token", verifyJWT, checkToken);

router.post("/update-password", verifyJWT, updatePassword);

module.exports = router;
