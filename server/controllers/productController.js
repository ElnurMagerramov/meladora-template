const Product = require("../models/Product");
const fs = require("fs");
const path = require("path");

const parentPath = path.join(__dirname, "..");

exports.createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const product = await Product.create(
      {
      name,
      price,
      image: req.file.filename,
    }
    );
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch {
    res.status(404).send({
      status: "unseccess",
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    let deletedImage = parentPath + "/public/uploads/" + product.image;
    fs.unlink(deletedImage, async (err) => {
      if (err) {
        console.error("Error deleting image:", err);
      } else {
        await Product.findOneAndDelete({ _id: req.params.id });
        res.status(200).send("Product has been deleted");
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const product = await Product.findOne({ _id: req.params.id });
    product.name = name;
    product.price = price;
    product.image = req.file.filename;
    product.save();
    res.status(200).json({
      updated: true,
      product,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
