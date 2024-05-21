const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define the review schema
const reviewSchema = new Schema(
  {
    time: {
      type: String,
      required: true,
      enum: ["Morning", "Afternoon", "Evening", "Night"],
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    looksNew: {
      type: Boolean,
      required: true,
    },
    pros: {
      type: String,
      required: true,
    },
    cons: {
      type: String,
      required: true,
    },
    reviewer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

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
      minlength: [6, "Postal code must be exactly 6 digits"],
      maxlength: [6, "Postal code must be exactly 6 digits"],
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
      enum: ["3-room", "4-room", "5-room"],
    },
    imageUrl: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema], // Embed the review schema
  },
  {
    timestamps: true,
  }
);

// propertySchema.virtual("reviews", {
//   ref: "Review",
//   localField: "_id",
//   foreignField: "propertyId",
// });

module.exports = mongoose.model("Property", propertySchema);
