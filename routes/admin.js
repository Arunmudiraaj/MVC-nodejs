const express = require("express");

const productsControllers = require("../controllers/products");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", productsControllers.getAddProductPage);

// /admin/add-product => POST
router.post("/add-product", productsControllers.addProduct);

module.exports = router;
