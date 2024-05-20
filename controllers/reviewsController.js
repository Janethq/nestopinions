const Review = require("../models/reviewModel");
const User = require("../models/user");

const create = async (req, res) => {
  try {
    const { propertyId, time, rating, looksNew, pros, cons, reviewer } =
      req.body;

    // Create new review
    const newReview = new Review({
      propertyId,
      time,
      rating,
      looksNew,
      pros,
      cons,
      reviewer,
    });

    // Save the new review to the database
    const savedReview = await newReview.save();

    // Update user's reviewsPosted array
    await User.findByIdAndUpdate(reviewer, {
      $push: { reviewsPosted: savedReview._id },
    });

    res.status(201).json(savedReview);
  } catch (error) {
    console.error("Error creating review:", error);
    res.status(500).json({ message: "Failed to create review" });
  }
};

// const create = async (req, res) => {
//   try {
//     const review = await Review.create(req.body);
//     res.status(200).json(review);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
// };

const index = async (req, res) => {
  const reviews = await Review.find({});
  res.json(reviews);
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReview = await Review.findByIdAndDelete(id);
    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res
      .status(200)
      .json({ message: "Review deleted successfully", deletedReview });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const reviews = await Review.find({
      propertyId: id,
    });
    console.log("this is reviews");
    console.log(reviews);
    res.json(reviews);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  index,
  getOne,
  remove,
};
