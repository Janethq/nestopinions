const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../../controllers/api/reviewsController");
const { verifyJWT } = require("../../config/verifyToken");

//get all reviews
router.get("/", reviewsCtrl.index);

//property ID
//http:localhost:3000/reviews/property/:id
//get reviews for 1 property
router.get("/property/:id", reviewsCtrl.getOne);
//create 1 review for 1 property
router.post("/property", verifyJWT, reviewsCtrl.create);

//Review ID
//http:localhost:3000/reviews/:id
//delete specific review
router.delete("/:id", reviewsCtrl.remove);

module.exports = router;
