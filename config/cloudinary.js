const cloudinary = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: "properties",
      format: file.mimetype.split("/")[1], // Extract the format from the mimetype
      public_id: file.originalname.split(".")[0], // Use the original name without the file extension as the public ID
    };
  },
});

module.exports = { cloudinary, storage };
