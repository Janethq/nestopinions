var express = require("express");
var router = express.Router();

const {
  index,
  create,
  search,
  remove,
  update,
} = require("../../controllers/api/propertyController");

router.get("/", index);
router.post("/", create);
router.get("/search", search);
router.delete("/:id", remove);
router.put("/:id", update);

module.exports = router;
