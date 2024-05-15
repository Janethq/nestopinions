const Property = require("../../models/property");

// 6) THESE ARE THE METHODS YOU CREATED, USUALLY ALL LOOK SIMILAR
const create = async (req, res) => {
  const body = req.body;
  // 7) YOU CAN THEN USE THE MODEL YOU CREATED IN "MODELS" - IT'S A BLUEPRINT
  const property = await Property.create(body);

  // 8) YOU RETURN WHAT YOU CREATED / GOT [FIND] - WAHLAAAAA!
  res.status(201).json(property);
};

const index = async (req, res) => {
  const properties = await Property.find({});
  res.json(properties);
};

module.exports = {
  index,
  create,
};

// const getProp = function (req, res) {
//   console.log("get all booking");
//   console.log(req.body);
//   res.send("Here is all your bookings!");
// };

// module.exports = {
//   getProp,
// };
