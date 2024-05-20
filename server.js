const express = require("express");
const path = require("path");
const logger = require("morgan");
const debug = require("debug")("mern:server");

// const cors = require("cors"); //for security
// const corsOptions = require("./config/corsOptions");
const { verifyJWT } = require("./config/verifyToken");
require("dotenv").config();

require("./config/database"); //connect to database

const app = express();

app.use(logger("dev"));
app.use(express.json()); //middleware (json data --> req.body)
app.use(express.urlencoded({ extended: true }));
// app.use(cors(corsOptions));

app.use("/public", express.static("public")); //m static files from public directory
// app.use("/public", express.static(path.join(__dirname, "public"))); //m

app.use(verifyJWT);

app.use(express.static(path.join(__dirname, "/dist")));
app.use("/", require("./routes/api/root"));
app.use("/api/users", require("./routes/api/authRoutes")); // proxy /api ===:3000

app.use("/api/reviews", require("./routes/reviewRoutes"));

const propertiesRouter = require("./routes/api/propertiesRouter");
app.use("/api/properties", propertiesRouter);

//m what they cannot catch, they throw here.
// app.get("/*", function (req, res) {
//   res.json({ error: "no page found" });
// });

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  debug(`Express app running on port ${port}`);
});
