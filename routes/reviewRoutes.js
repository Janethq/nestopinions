const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../../controllers/reviewsController");

router.post("/reviews", reviewsCtrl.create);

module.exports = router;