const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const adminData=require('./admin')
const router = express.Router();
router.get("/", (req, res, next) => {
  console.log(adminData.products)
  res.render('shop',{
    prods:adminData.products,
    pageTitle: 'Shop',
    path:'/',
    hasproduct: adminData.products.length>0,
    formCSS: true,
    productCSS: true,
    activeShop: true
  })
});
module.exports = router;
