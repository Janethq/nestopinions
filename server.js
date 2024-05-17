const express = require("express");
const path = require("path");
const logger = require("morgan");
const debug = require("debug")("mern:server");
const cors = require("cors"); //for security
const corsOptions = require("./config/corsOptions");
const cookieParser = require("cookie-parser");
const { verifyJWT } = require("./config/verifyToken");
require("dotenv").config();
require("./config/database"); //connect to database

const app = express();

app.use(logger("dev"));
app.use(express.json()); //middleware (json data --> req.body)
app.use(cors(corsOptions));
app.use(cookieParser()); //middleware (jwt --> cookie)
app.use(verifyJWT);

app.use(express.static(path.join(__dirname, "/public")));

app.use("/", require("./routes/api/root"));
app.use("/api/users", require("./routes/api/authRoutes")); // proxy /api ===:3000

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  debug(`Express app running on port ${port}`);
});
