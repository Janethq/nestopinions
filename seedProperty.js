require("dotenv").config();
require("./config/database");
// const { faker } from "@faker-js/faker"; if you use faker

const Property = require("./models/property");

const properties = [
  { address: "525b Pasir Ris St 51 #03-523, S512525" },
  // { email: "faith@ga.co", name: "faith", password: "123" },
];

const main = async () => {
  await Property.deleteMany({});

  await Property.create(properties);
};

main();
