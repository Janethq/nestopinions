const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    time: {
      type: String,
      required: true,
      enum: ["Morning", "Afternoon", "Evening", "Night"],
    },
    propertyId: {
      type: String,
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

module.exports = mongoose.model("Review", reviewSchema);
