const express = require("express");
const upload = require("../middlewares/uploadMiddleware");
const productController = require("../controllers/productController");

// variables
const router = express.Router();

// routes
router.route("/").get(productController.getAllProducts);
router
  .route("/")
  .post( productController.createProduct);
router
  .route("/:id")
  .put(upload.single("imageFile"), productController.updateProduct);
router.route("/:id").delete(productController.deleteProduct);

module.exports = router;
