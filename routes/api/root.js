const express = require("express");
const router = express.Router();
const path = require("path");

//defining GET route handler for specified path (using regex to match root url OR index or index.html) and sends specified file to client
router.get("^/$|index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = router;
