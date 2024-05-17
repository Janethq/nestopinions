const mongoose = require("mongoose");
require("dotenv").config();

const Property = require("./models/property");

// Connect to the database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

const seedData = [
  {
    address: "525B Pasir Ris Street 51",
    postalCode: 512525,
    area: "Pasir Ris",
    distanceMrt: "300m",
    hdbType: "4-room",
  },
  {
    address: "456 Serangoon Road",
    postalCode: 218163,
    area: "Serangoon",
    distanceMrt: "400m",
    hdbType: "4-room",
  },
  {
    address: "789 Bukit Timah Road",
    postalCode: 269791,
    area: "Bukit Timah",
    distanceMrt: "300m",
    hdbType: "5-room",
  },
  {
    address: "101 Clementi Avenue 3",
    postalCode: 129905,
    area: "Clementi",
    distanceMrt: "150m",
    hdbType: "3-room",
  },
  {
    address: "202 Bedok North Street 1",
    postalCode: 460202,
    area: "Bedok",
    distanceMrt: "600m",
    hdbType: "4-room",
  },
  {
    address: "303 Jurong East Street 21",
    postalCode: 600303,
    area: "Jurong East",
    distanceMrt: "500m",
    hdbType: "5-room",
  },
];

// Seed function
const seedDB = async () => {
  try {
    // Clear the existing data
    await Property.deleteMany({});
    console.log("Existing data cleared");

    await Property.insertMany(seedData);
    console.log("Database okay!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
