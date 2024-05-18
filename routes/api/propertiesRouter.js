var express = require("express");
var router = express.Router();

const {
  index,
  create,
  search,
  remove,
  update,
  show,
  seed,
} = require("../../controllers/api/propertyController");

router.get("/", index);
router.post("/", create);
router.get("/seed", seed);
// router.post("/", upload.single("image"), create);
router.get("/search", search);
router.delete("/:id", remove);
router.put("/:id", update);
router.get("/:id", show);

module.exports = router;
