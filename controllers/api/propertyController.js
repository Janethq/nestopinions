const Property = require("../../models/property");

//SEED DATA
const seedData = [
  {
    address: "525B Pasir Ris Street 51",
    postalCode: 512525,
    area: "Pasir Ris",
    distanceMrt: "300m",
    hdbType: "4-room",
    imageUrl:
      "https://ohmyhome.com/wp-content/uploads/2021/07/IMG_9026-2-1-e1633056815164.jpg",
    reviews: [
      {
        time: "Morning",
        rating: 4,
        looksNew: true,
        pros: "Spacious and well-lit",
        cons: "Noisy neighbors",
      },
    ],
  },
  {
    address: "456 Serangoon Road",
    postalCode: 218163,
    area: "Serangoon",
    distanceMrt: "400m",
    hdbType: "4-room",
    imageUrl:
      "https://ohmyhome.com/wp-content/uploads/2021/08/IMG_8871-2-scaled.jpg",
    reviews: [
      {
        time: "Afternoon",
        rating: 4,
        looksNew: true,
        pros: "Good Location",
        cons: "Construction nearby",
      },
    ],
  },
  {
    address: "303 Jurong East Street 21",
    postalCode: 600303,
    area: "Jurong East",
    distanceMrt: "500m",
    hdbType: "5-room",
    imageUrl:
      "https://i0.wp.com/lifefinance.com.sg/wp-content/uploads/2020/01/nguyen-thu-hoai-a15b7LYrfbk-unsplash-scaled.jpg?resize=768%2C472&ssl=1",
    reviews: [],
  },
  {
    address: "101 Clementi Avenue 3",
    postalCode: 129905,
    area: "Clementi",
    distanceMrt: "150m",
    hdbType: "3-room",
    imageUrl:
      "https://www.mynicehome.gov.sg/wp-content/uploads/Things-to-Know-When-Applying-for-SBF-1.jpg",
    reviews: [],
  },
  {
    address: "202 Bedok North Street 1",
    postalCode: 460202,
    area: "Bedok",
    distanceMrt: "600m",
    hdbType: "4-room",
    imageUrl:
      "https://i0.wp.com/lifefinance.com.sg/wp-content/uploads/2022/11/P-Yishun-Boardwalk.jpg?w=1536&ssl=1",
    reviews: [],
  },
  {
    address: "201 Tampines st 21",
    postalCode: 520201,
    area: "Tampines",
    distanceMrt: "800m",
    hdbType: "5-room",
    imageUrl:
      "https://ohmyhome.com/wp-content/uploads/2021/08/IMG_8942-2-scaled.jpg",
    reviews: [],
  },
  {
    address: "894 Tampines Street 81",
    postalCode: 520894,
    area: "Tampines",
    distanceMrt: "250m",
    hdbType: "3-room",
    imageUrl:
      "https://ohmyhome.com/wp-content/uploads/2021/08/IMG_9074-2-scaled.jpg",
    reviews: [],
  },
  {
    address: "374 Tampines Street 34",
    postalCode: 520374,
    area: "Tampines",
    distanceMrt: "400m",
    hdbType: "5-room",
    imageUrl:
      "https://www.mynicehome.gov.sg/wp-content/uploads/A-Singles-Guide-to-Buying-an-HDB-Flat-1.jpg",
    reviews: [],
  },
  {
    address: "128D Punggol Field Walk",
    postalCode: 824128,
    area: "Punggol",
    distanceMrt: "300m",
    hdbType: "4-room",
    imageUrl:
      "https://www.mynicehome.gov.sg/wp-content/uploads/A-Singles-Guide-to-Buying-an-HDB-Flat-Cover-1024x576.jpg",
    reviews: [],
  },
];

//SEED PROPERTY
const seed = async (req, res) => {
  await Property.deleteMany({});
  console.log("Existing data cleared");
  const property = await Property.insertMany(seedData);
  console.log("Database okay!");
  res.status(201).json(property);
};

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
  search,
  show,
  seed,
  featured,
};
