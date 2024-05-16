const express = require("express");
const path = require("path");
const logger = require("morgan");
const debug = require("debug")("mern:server");
// Always require and configure near the top
require("dotenv").config();
require("./config/database");

const app = express();

app.use(logger("dev"));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(express.static(path.join(__dirname, "dist")));

// Put API routes here, before the "catch all" route
app.get("/api", (req, res) => {
  res.json({ hello: "world" });
});
app.use("/api/users", require("./routes/api/usersRoutes"));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

//m 2. import route using router
var propertiesRouter = require("./routes/api/propertiesRouter");

//m 1. create path to reach route
app.use("/api/properties", propertiesRouter);

// m parsing yrl encoded form data & serve static files if requested by user
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 3000;

app.listen(port, function () {
  debug(`Express app running on port ${port}`);
});
