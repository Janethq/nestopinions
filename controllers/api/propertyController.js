const Property = require("../../models/property");

//CREATE PROPERTY
const create = async (req, res) => {
  const body = req.body;
  const property = await Property.create(body);
  res.status(201).json(property); //return what you created
};

//SEE ALL PROPERTIES
const index = async (req, res) => {
  const properties = await Property.find({});
  res.json(properties);
};

// SEARCH BY AREA
// const search = async (req, res) => {
//   const { area } = req.query;
//   try {
//     if (!area) {
//       return res.status(400).json({ error: "Area of Property Estate" });
//     }
//     const properties = await Property.find({ area });
//     res.json(properties);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

//SEARCH MULTIPLE BY AREA, POSTALCODE, HDBTYPE
const search = async (req, res) => {
  const { area, postalCode, hdbType } = req.query;
  try {
    let query = {};

    if (area) {
      query.area = area;
    }

    if (postalCode) {
      query.postalCode = postalCode;
    }

    if (hdbType) {
      query.hdbType = hdbType;
    }

    const properties = await Property.find(query);
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//DELETE
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProperty = await Property.findByIdAndDelete(id);
    if (!deletedProperty) {
      return res.status(404).json({ error: "Property not found" });
    }
    res.json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//UPDATE BY ID TAMP=>UPDATED TAMPINES
const update = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedProperty = await Property.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!updatedProperty) {
      return res.status(404).json({ error: "Property not found" });
    }
    res.json(updatedProperty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  index,
  create,
  search,
  remove,
  update,
};
