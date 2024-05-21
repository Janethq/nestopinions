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
      minlength: [6, "Postal code must be exactly 6 digits"], //provide custom validation message for developers, omitting msg will end up with ugly default msg
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
  },
  {
    timestamps: true,
  }
);

propertySchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "propertyId",
});

module.exports = mongoose.model("Property", propertySchema);
