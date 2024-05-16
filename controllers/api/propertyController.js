const Property = require("../../models/property");

const create = async (req, res) => {
  const body = req.body;
  const property = await Property.create(body);
  res.status(201).json(property); //return what you created
};

const index = async (req, res) => {
  const properties = await Property.find({});
  res.json(properties);
};

const search = async (req, res) => {
  const query = req.query; // Assuming search parameters are passed as query parameters
  const properties = await Property.find(query);
  res.json(properties);
};

module.exports = {
  index,
  create,
  search,
};
