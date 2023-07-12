const fs = require("fs");
const path = require("path");
const root = require("../util/path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    const p = path.join(root, "data", "products.json");
    fs.readFile(p, (err, fileContents) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContents);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    const p = path.join(root, "data", "products.json");
    fs.readFile(p, (err, fileContents) => {
      if (err) {
        cb([]);
        return;
      }
      cb(JSON.parse(fileContents));
    });
  }
};
