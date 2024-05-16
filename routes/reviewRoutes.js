const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../../controllers/reviewsController");

router.post("/api/reviews", reviewsCtrl.create);

module.exports = router;