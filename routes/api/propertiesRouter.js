var express = require("express");
var router = express.Router();

const { index, create } = require("../../controllers/api/propertyController");

router.get("/", index);
router.post("/", create);

module.exports = router;

//step 3
