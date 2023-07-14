const Product = require("../models/product");
exports.getAddProductPage = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.addProduct = (req, res, next) => {
  const item = new Product(req.body.title);
  item.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, metaData]) => {
      res.render("shop", {
        prods: rows,
        pageTitle: "Shop",
        path: "/",
        hasProducts: rows.length > 0,
        activeShop: true,
        productCSS: true,
      });
    })
    .catch((err) => console.log(err));
};
