const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    address: {
      type: String,
      required: true,
      trim: true,
    },
    postalCode: {
      type: Number,
      required: true,
    },
    area: {
      type: String,
      required: true,
      trim: true,
    },
    distanceMrt: {
      type: String,
      required: true,
      trim: true,
    },
    hdbType: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Property", propertySchema);

// const propertySchema = new Schema(
//   {
//     airline: {
//       type: String,
//       enum: ["American", "Southwest", "United", "Meryl23"],
//     },
//     airport: {
//       type: String,
//       enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
//       default: "DEN",
//     },
//     flightNo: {
//       type: Number,
//       required: true,
//       min: 10,
//       max: 9999,
//     },
//     departs: {
//       type: Date,
//       default: () => {
//         const date = new Date();
//         return date.setFullYear(date.getFullYear() + 1);
//       },
//     },
//     destinations: [destinationSchema], // Array of destination subdocuments
//   },
//   {
//     timestamps: true,
//   }
// );
