const Property = require("../../models/property");

//SEED DATA FOR EASY ACCESS
const seedData = [
  {
    address: "525B Pasir Ris Street 51",
    postalCode: 512525,
    area: "Pasir Ris",
    distanceMrt: "300m",
    hdbType: "4-room",
    imageUrl:
      "https://ohmyhome.com/wp-content/uploads/2021/07/IMG_9026-2-1-e1633056815164.jpg",
  },
  {
    address: "456 Serangoon Road",
    postalCode: 218163,
    area: "Serangoon",
    distanceMrt: "400m",
    hdbType: "4-room",
    imageUrl:
      "https://ohmyhome.com/wp-content/uploads/2021/08/IMG_8871-2-scaled.jpg",
  },
  {
    address: "789 Bukit Timah Road",
    postalCode: 269791,
    area: "Bukit Timah",
    distanceMrt: "300m",
    hdbType: "5-room",
    imageUrl:
      "https://ohmyhome.com/wp-content/uploads/2021/08/IMG_8942-2-scaled.jpg",
  },
  {
    address: "101 Clementi Avenue 3",
    postalCode: 129905,
    area: "Clementi",
    distanceMrt: "150m",
    hdbType: "3-room",
    imageUrl:
      "https://ohmyhome.com/wp-content/uploads/2021/08/IMG_9074-2-scaled.jpg",
  },
  {
    address: "202 Bedok North Street 1",
    postalCode: 460202,
    area: "Bedok",
    distanceMrt: "600m",
    hdbType: "4-room",
    imageUrl:
      "https://i0.wp.com/lifefinance.com.sg/wp-content/uploads/2022/11/P-Yishun-Boardwalk.jpg?w=1536&ssl=1",
  },
  {
    address: "303 Jurong East Street 21",
    postalCode: 600303,
    area: "Jurong East",
    distanceMrt: "500m",
    hdbType: "5-room",
    imageUrl:
      "https://i0.wp.com/lifefinance.com.sg/wp-content/uploads/2020/01/nguyen-thu-hoai-a15b7LYrfbk-unsplash-scaled.jpg?resize=768%2C472&ssl=1",
  },
];

// https://i0.wp.com/www.alainguillot.com/wp-content/uploads/2021/05/second-HDB.jpg?w=479&ssl=1

//CREATE PROPERTY
const create = async (req, res) => {
  const body = req.body;
  //taking whatever it received, dig into data, grabbin the body
  const property = await Property.create(body);
  res.status(201).json(property); //return what you created
};

//SEED PROPERTIES
const seed = async (req, res) => {
  await Property.deleteMany({});
  console.log("Existing data cleared");
  const property = await Property.insertMany(seedData);
  console.log("Database okay!");
  res.status(201).json(property);
};

// const seed = async (req, res) => {
//   console.log("It works");
//   res.status(200).send("It works");
// };

//SEE ALL PROPERTIES
const index = async (req, res) => {
  const properties = await Property.find({});
  res.json(properties);
};

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

//DISPLAY ONE BY ID FOR PROPERTY DETAILS
const show = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// FEATURED LISTINGS
const featured = async (req, res) => {
  try {
    const featuredProperties = await Property.find({});
    res.json(featuredProperties);
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
  show,
  seed,
  featured,
};
