const Review = require("../../models/reviewModel");

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
