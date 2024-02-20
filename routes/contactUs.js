const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

router.get("/contactUs", (req, res, next) => {
  res.render('contactUs',{
    pageTitle: 'Contact Us',
    path:'/contactUs',
    formCSS: true,
    productCSS: true,
    activeShop: true
  })
});
router.post("/success", (req, res, next) => {
  res.render('success',{
    pageTitle: 'Form Filled',
    path:'/success',
    formCSS: true,
    productCSS: true,
    activeShop: true
  })
});
module.exports = router;
