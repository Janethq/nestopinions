// config/multer.js
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinaryConfig");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "properties", // Optional folder name on Cloudinary
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});

const parser = multer({ storage: storage });

module.exports = parser;
