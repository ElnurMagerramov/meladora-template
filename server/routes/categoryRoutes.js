const express = require("express");
const categoryController = require("../controllers/categoryController");

// variables
const router = express.Router();

// routes
router.route("/").get(categoryController.getAllCategories);
router.route("/").post(categoryController.createCategory);
router.route("/:id").put(categoryController.updateCategory);
router.route("/:id").delete(categoryController.deleteCategory);

module.exports = router;
