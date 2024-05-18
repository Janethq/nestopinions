const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviewsController");

// router.get("/", (req, res) => {
//   res.json({ route: "reviews" });
// });

router.get("/", reviewsCtrl.index);
router.get("/test", reviewsCtrl.test);
router.post("/create", reviewsCtrl.create);
router.delete("/:id", reviewsCtrl.remove);
router.put("/:id", reviewsCtrl.update);

module.exports = router;
