const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviewsController");

router.get("/", (req, res) => {
  res.json({ route: "reviews" });
});

router.get("/test", reviewsCtrl.test);

router.post("/create", reviewsCtrl.create);

module.exports = router;