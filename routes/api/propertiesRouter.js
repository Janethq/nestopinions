var express = require("express");
var router = express.Router();

const {
  index,
  // create,
  search,
  show,
  seed,
  featured,
} = require("../../controllers/api/propertyController");

router.get("/seed", seed);
router.get("/", index);
// router.post("/", create);
router.get("/search", search);
router.get("/:id", show);
router.get("/featured", featured);

module.exports = router;
