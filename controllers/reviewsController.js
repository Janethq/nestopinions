const Review = require("../models/reviewModel");

const create = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(200).json(review);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const index = async (req, res) => {
  const reviews = await Review.find({});
  res.json(reviews);
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedReview = await Review.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json(updatedReview);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
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

const test = async (req, res) => {
  res.json({ route: "reviews-test" });
};

module.exports = {
  create,
  index,
  test,
  update,
  remove,
};
