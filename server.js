const express = require("express");
// const path = require("path");
const logger = require("morgan");
const debug = require("debug")("mern:server");
// Always require and configure near the top
require("dotenv").config();
require("./config/database");
const app = express();

app.use(logger("dev"));
app.use(express.json());

// Put API routes here, before the "catch all" route
app.get("/api", (req, res) => {
  res.json({ hello: "world" });
});
// app.use("/api/users", require("./routes/api/usersRoutes"));
app.use("/reviews", require("./routes/reviewRoutes"));

const propertiesRouter = require("./routes/api/propertiesRouter");
app.use("/api/properties", propertiesRouter);

//m what they cannot catch, they throw here.
app.get("/*", function (req, res) {
  res.json({ error: "no page found" });
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  debug(`Express app running on port ${port}`);
});
