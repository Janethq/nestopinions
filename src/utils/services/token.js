const jwt = require("jsonwebtoken");

const storeUser = (req, res, user) => {
  res.locals.user = user;
};

const getUser = (req, res) => {
  return res.locals.user;
};

//middleware
const verifyJWT = (req, res, next) => {
  const header = req.get("Authorization");
  if (!header) {
    storeUser(req, res, null);
    return next();
  }

  const token = header.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, process.env.SECRET);
    storeUser(req, res, payload.user);
    next();
  } catch (error) {
    storeUser(req, res, null);
    next();
  }
};

module.exports = {
  verifyJWT,
  storeUser,
  getUser,
};
