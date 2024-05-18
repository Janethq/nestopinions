// const mongoose = require("mongoose");
// require("dotenv").config();

// const Property = require("./models/property");

// // Connect to the database
// mongoose
//   .connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Database connected");
//   })
//   .catch((error) => {
//     console.error("Database connection error:", error);
//   });

// const seedData = [
//   {
//     address: "525B Pasir Ris Street 51",
//     postalCode: 512525,
//     area: "Pasir Ris",
//     distanceMrt: "300m",
//     hdbType: "4-room",
//     imageUrl:
//       "https://ohmyhome.com/wp-content/uploads/2021/07/IMG_9026-2-1-e1633056815164.jpg",
//   },
//   {
//     address: "456 Serangoon Road",
//     postalCode: 218163,
//     area: "Serangoon",
//     distanceMrt: "400m",
//     hdbType: "4-room",
//     imageUrl:
//       "https://www.hdb.gov.sg/-/media/HDBContent/Images/CCG/our-towns-tampines-2.ashx",
//   },
//   {
//     address: "789 Bukit Timah Road",
//     postalCode: 269791,
//     area: "Bukit Timah",
//     distanceMrt: "300m",
//     hdbType: "5-room",
//     imageUrl:
//       "https://ohmyhome.com/wp-content/uploads/2021/07/IMG_9026-2-1-e1633056815164.jpg",
//   },
//   {
//     address: "101 Clementi Avenue 3",
//     postalCode: 129905,
//     area: "Clementi",
//     distanceMrt: "150m",
//     hdbType: "3-room",
//     imageUrl:
//       "https://ohmyhome.com/wp-content/uploads/2021/08/IMG_9074-2-scaled.jpg",
//   },
//   {
//     address: "202 Bedok North Street 1",
//     postalCode: 460202,
//     area: "Bedok",
//     distanceMrt: "600m",
//     hdbType: "4-room",
//     imageUrl:
//       "https://ohmyhome.com/wp-content/uploads/2021/08/IMG_9074-2-scaled.jpg",
//   },
//   {
//     address: "303 Jurong East Street 21",
//     postalCode: 600303,
//     area: "Jurong East",
//     distanceMrt: "500m",
//     hdbType: "5-room",
//     imageUrl:
//       "https://ohmyhome.com/wp-content/uploads/2021/08/IMG_9074-2-scaled.jpg",
//   },
// ];

// // Seed function
// const seedDB = async () => {
//   try {
//     // Clear the existing data to reset first.
//     await Property.deleteMany({});
//     console.log("Existing data cleared");

//     await Property.insertMany(seedData);
//     console.log("Database okay!");
//   } catch (error) {
//     console.error("Error seeding database:", error);
//   } finally {
//     mongoose.connection.close();
//   }
// };

// //com only call
// seedDB();
