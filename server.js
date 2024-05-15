const express = require("express");
const path = require("path");
const logger = require("morgan");
const debug = require("debug")("mern:server");
const cors = require("cors"); //for security
// Always require and configure near the top
require("dotenv").config();
require("./config/database");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

// Configure static middleware
// to serve from the production 'build' folder
// app.use(express.static(path.join(__dirname, "dist"))); //dist folder was deleted
app.use(express.static(path.join(__dirname, "/public")));

// Put API routes here, before the "catch all" route
// app.get("/api", (req, res) => {res.json({ hello: "world" });}); //for testing
app.use("/", require("./routes/api/root"));
app.use("/api/users", require("./routes/api/usersRoutes"));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests //generic
app.get("/*", function (req, res) {
  // res.sendFile(path.join(__dirname, "dist", "index.html")); //dist folder was deleted
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  debug(`Express app running on port ${port}`);
});
