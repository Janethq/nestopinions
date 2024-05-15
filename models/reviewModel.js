const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    time: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    looksNew: {
      type: Number,
      required: true,
    },
    pros: {
      type: String,
      required: false,
    },
    cons: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
