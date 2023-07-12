const path = require("path");

const express = require("express");
const productsControllers = require("../controllers/products");
const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", productsControllers.getProducts);

module.exports = router;