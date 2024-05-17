const express = require("express");
const path = require("path");
const logger = require("morgan");
const debug = require("debug")("mern:server");
const cors = require("cors"); //for security
const corsOptions = require("./config/corsOptions");
const cookieParser = require("cookie-parser");
const { verifyJWT } = require("./src/utils/services/token");
// Always require and configure near the top
require("dotenv").config();
require("./config/database"); //connect to database

const app = express();

app.use(logger("dev"));
app.use(express.json()); //middleware (json data --> req.body)
app.use(cors(corsOptions));
app.use(cookieParser()); //middleware (jwt --> cookie)
app.use(verifyJWT);

// Configure static middleware
// to serve from the production 'build' folder
// app.use(express.static(path.join(__dirname, "dist"))); //dist folder was deleted
app.use(express.static(path.join(__dirname, "/public")));

// Put API routes here, before the "catch all" route
// app.get("/api", (req, res) => {res.json({ hello: "world" });}); //for testing
app.use("/", require("./routes/api/root"));
app.use("/api/users", require("./routes/api/authRoutes")); // proxy /api ===:3000

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
