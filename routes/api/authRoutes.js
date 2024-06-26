const express = require("express");
const router = express.Router();
const {
  test,
  registerUser,
  loginUser,
  checkToken,
  updatePassword,
  fetchUserReviews,
  deleteMyReview,
} = require("../../controllers/api/authController");
const { verifyJWT } = require("../../config/verifyToken");

// /api/users
router.get("/", test); //bruno --> testing
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/check-token", verifyJWT, checkToken);

router.post("/update-password", verifyJWT, updatePassword);

router.get("/my-reviews", verifyJWT, fetchUserReviews);
router.delete("/my-reviews/:reviewId", verifyJWT, deleteMyReview);

module.exports = router;
