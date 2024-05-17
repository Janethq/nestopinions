const debug = require("debug")("mern:controllers:authController");
const { default: toast } = require("react-hot-toast");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getUser } = require("../config/verifyToken");

// testing to ensure endpoint is working
const test = (req, res) => {
  res.json("testing");
};

//helper function
const createJWT = (user) =>
  jwt.sign({ user }, process.env.SECRET, { expiresIn: "10s" });

// register
const registerUser = async (req, res) => {
  debug("body: %o", req.body);
  const { username, email, password } = req.body;

  try {
    //error msg for bad request (400)
    const emailRegistered = await User.findOne({ email });

    if (password.length < 3 || emailRegistered) {
      return res.status(400).json({
        error: `Registration unsuccessful! You may already have an account registered.`,
      });
    }

    //using modelcreate method of mongoose api
    const user = await User.create({
      username,
      email,
      password,
    });

    debug("user: %o", user);
    // res.status(201).json({ user });

    const token = createJWT(user);
    res.status(201).json(token);
  } catch (error) {
    debug("error: %o", error);
    res.status(500).json({ error });
  }
};

// login
const loginUser = async (req, res) => {
  //   res.json({ msg: "login endpoint" }); //test bruno

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({ error: "Email not registered" });
      toast.error(res.error);
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      //   res.status(200).json({ message: "Login successful" });
      const token = createJWT(user);
      res.status(201).json(token);
    }
    if (!match) {
      res.status(401).json({ error: "Incorrect password" });
    }
  } catch (error) {
    debug("error: %o", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const checkToken = (req, res) => {
  const user = getUser(req, res); //res.locals.user;
  if (user) {
    res.status(200).json({ user });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  checkToken,
};
