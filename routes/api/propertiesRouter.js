var express = require("express");
var router = express.Router();

const {
  index,
  create,
  search,
  remove,
  update,
  show,
} = require("../../controllers/api/propertyController");

router.get("/", index);
router.post("/", create);
router.get("/search", search);
router.delete("/:id", remove);
router.put("/:id", update);
router.get("/:id", show);

module.exports = router;
