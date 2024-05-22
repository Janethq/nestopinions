require("dotenv").config();
require("./config/database");
const { faker } = require("@faker-js/faker");

const User = require("./models/user");
const Property = require("./models/property");

const seedUsers = [
  {
    email: "test@mail.com",
    username: faker.internet.userName(),
    password: "123",
  },
  {
    email: "giraffe@zoo.com",
    username: faker.internet.userName(),
    password: "123",
  },
  {
    email: "tiger@zoo.com",
    username: faker.internet.userName(),
    password: "123",
  },
  {
    email: "winnie@pooh.com",
    username: faker.internet.userName(),
    password: "123",
  },
  {
    email: "dolphin@sea.com",
    username: faker.internet.userName(),
    password: "123",
  },
];

const seedProerties = [
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
        time: "Morning",
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
  },
  {
    address: "101 Clementi Avenue 3",
    postalCode: 129905,
    area: "Clementi",
    distanceMrt: "150m",
    hdbType: "3-room",
    imageUrl:
      "https://www.mynicehome.gov.sg/wp-content/uploads/Things-to-Know-When-Applying-for-SBF-1.jpg",
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
    address: "201 Tampines st 21",
    postalCode: 520201,
    area: "Tampines",
    distanceMrt: "800m",
    hdbType: "5-room",
    imageUrl:
      "https://ohmyhome.com/wp-content/uploads/2021/08/IMG_8942-2-scaled.jpg",
  },
  {
    address: "894 Tampines Street 81",
    postalCode: 520894,
    area: "Tampines",
    distanceMrt: "250m",
    hdbType: "3-room",
    imageUrl:
      "https://ohmyhome.com/wp-content/uploads/2021/08/IMG_9074-2-scaled.jpg",
  },
  {
    address: "374 Tampines Street 34",
    postalCode: 520374,
    area: "Tampines",
    distanceMrt: "400m",
    hdbType: "5-room",
    imageUrl:
      "https://www.mynicehome.gov.sg/wp-content/uploads/A-Singles-Guide-to-Buying-an-HDB-Flat-1.jpg",
  },
  {
    address: "128D Punggol Field Walk",
    postalCode: 824128,
    area: "Punggol",
    distanceMrt: "300m",
    hdbType: "4-room",
    imageUrl:
      "https://www.mynicehome.gov.sg/wp-content/uploads/A-Singles-Guide-to-Buying-an-HDB-Flat-Cover-1024x576.jpg",
  },
];

const sowTheSeedInDb = async () => {
  await User.deleteMany({});
  await User.create(seedUsers);
  await Property.deleteMany({});
  await Property.create(seedProerties);
};

sowTheSeedInDb(); //open new termainal // run command: node seed.js // check by refreshing db in compass
