const debug = require("debug")("mern:controllers:authController");
const User = require("../models/user");
const bcrypt = require("bcrypt");

// testing to ensure endpoint is working
const test = (req, res) => {
  res.json("testing");
};

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
    res.status(201).json({ user });
  } catch (error) {
    debug("error: %o", error);
    res.status(500).json({ error });
  }
};

const loginUser = async (req, res) => {
  //   res.json({ msg: "login endpoint" }); //test bruno

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Email not registered" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ error: "Incorrect password" });
    }
  } catch (error) {
    debug("error: %o", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
};
