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
      type: Number, // Changed to String type
      required: true,
      minlength: [6, "Postal code must be exactly 6 digits"], // Adjusted validation
      maxlength: [6, "Postal code must be exactly 6 digits"], // Adjusted validation
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Property", propertySchema);
