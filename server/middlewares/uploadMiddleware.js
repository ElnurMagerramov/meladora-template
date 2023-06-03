const multer = require("multer");

const storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + "-" + file.originalname.toLowerCase().split(" ").join("-")
    );
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
