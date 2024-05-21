const debug = require("debug")("mern:controllers:authController");
const { default: toast } = require("react-hot-toast");
const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getUser } = require("../../config/verifyToken");
const Property = require("../../models/property");
const Review = require("../../models/reviewModel");

// testing to ensure endpoint is working
const test = (req, res) => {
  res.json("testing");
};

//helper function
const createJWT = (user) =>
  jwt.sign({ user }, process.env.SECRET, { expiresIn: "10m" });

// register
const registerUser = async (req, res) => {
  debug("body: %o", req.body);
  const { username, email, password } = req.body;

  try {
    //error msg for bad request (400)
    const emailRegistered = await User.findOne({ email });

    if (password.length < 3 || emailRegistered) {
      return res.status(400).json({
        error: `Registration unsuccessful! You may already have an account registered.`,
      });
    }

    //using modelcreate method of mongoose api
    const user = await User.create({
      username,
      email,
      password,
    });

    debug("user: %o", user);
    // res.status(201).json({ user });

    const token = createJWT(user);
    res.status(201).json(token);
  } catch (error) {
    debug("error: %o", error);
    res.status(500).json({ error });
  }
};

// login
const loginUser = async (req, res) => {
  //   res.json({ msg: "login endpoint" }); //test bruno

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({ error: "Email not registered" });
      toast.error(res.error);
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      //   res.status(200).json({ message: "Login successful" });
      const token = createJWT(user);
      res.status(201).json(token);
    }
    if (!match) {
      res.status(401).json({ error: "Incorrect password" });
    }
  } catch (error) {
    debug("error: %o", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const checkToken = (req, res) => {
  const user = getUser(req, res); //res.locals.user;
  if (user) {
    res.status(200).json({ user });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

//dashboard updatepw
const updatePassword = async (req, res) => {
  const { userId, currentPassword, newPassword } = req.body;

  try {
    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    // Compare the current password
    const match = await bcrypt.compare(currentPassword, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid current password." });
    }

    // Update the password directly in the database using findOneAndUpdate
    await User.findOneAndUpdate(
      { _id: userId },
      //   { $set: { password: newPassword } }, --> wasnt hashed
      { $set: { password: await bcrypt.hash(newPassword, 6) } },
      { new: true }
    );

    res.status(200).json({ message: "Password updated successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};

// dashboard MyReviewsTab
const fetchUserReviews = async (req, res) => {
  try {
    const userId = res.locals.user._id; //based on storeUser in verifyToken
    // const user = await User.findById(userId).populate("reviewsPosted");

    const user = await User.findById(userId).populate({
      path: "reviewsPosted",
      populate: {
        path: "propertyId",
        model: "Property",
      },
    }); //populaing via the referenced propertyId

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.status(200).json(user.reviewsPosted); //array of reviewId
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error." });
  }
};

// dashboard MyReviewsTab
const deleteMyReview = async (req, res) => {
  try {
    const reviewId = req.params.reviewId; // Assuming reviewId is passed as a route parameter
    const userId = res.locals.user._id; //based on storeUser in verifyToken

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Find the review to be deleted
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }

    // Delete the review using mongoose method
    await review.deleteOne();

    // since reviews are also embedded in properties & user --> need to remove ($pull in mongoose)

    // Update the User model - remove the review from reviewsPosted
    await User.findOneAndUpdate(
      { _id: review.reviewer },
      { $pull: { reviewsPosted: reviewId } }
    );

    // Update the Property model - remove the review from reviews
    await Property.findOneAndUpdate(
      { _id: review.propertyId },
      { $pull: { reviews: reviewId } }
    );

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  checkToken,
  updatePassword,
  fetchUserReviews,
  deleteMyReview,
};
