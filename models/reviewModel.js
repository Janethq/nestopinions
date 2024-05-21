// reviewModel.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    time: {
      type: String,
      required: true,
      enum: ["Morning", "Afternoon", "Evening", "Night"],
    },
    propertyId: {
      type: Schema.Types.ObjectId,
      ref: "Property",
      required: true,
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
    reviewer: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

// Add a static method to the schema
reviewSchema.statics.getReviewsByPropertyId = async function (propertyId) {
  const reviews = await this.find({ propertyId }).populate("propertyId").exec();

  return reviews;
};

module.exports = mongoose.model("Review", reviewSchema);
