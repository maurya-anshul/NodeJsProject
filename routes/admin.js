const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();
const products=[];
router.get("/add-product", (req, res, next) => {
  res.render('add-product',{
    pageTitle: 'Add Product',
    path:'/add-product',
    formCSS: true,
    productCSS: true,
    activeShop: true
  })
});
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  products.push({title:req.body.title})
  res.redirect("/");
});
module.exports = {
  routes:router,
  products:products
}