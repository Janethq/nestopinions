const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    time: {
      type: String,
      required: true,
      enum: ["Morning", "Afternoon", "Evening", "Night"],
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      max: 5,
    },
    looksNew: {
      type: Number,
      required: true,
      enum: ["Yes", "No"],
    },
    pros: {
      type: String,
      required: true,
    },
    cons: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
