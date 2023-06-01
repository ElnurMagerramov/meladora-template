const express = require("express");
const productController = require("../controllers/productController");

// variables
const router = express.Router();

// routes
router.route("/").get(productController.getAllProducts);
router
  .route("/")
  .post(upload.single("imageFile"), productController.createBanner);
router
  .route("/:id")
  .put(upload.single("imageFile"), productController.updateBanner);
router.route("/:id").delete(productController.deleteBanner);

module.exports = router;
