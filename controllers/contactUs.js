const Product = require("../models/product");

exports.getContactUs = (req, res, next) => {
    res.render("contact/contactUs", {
      pageTitle: "Contact Us",
      path: "/contactUs",
      formCSS: true,
      productCSS: true,
      activeShop: true,
    });
  };
  
  exports.postSuccess = (req, res, next) => {
    res.render("success", {
      pageTitle: "Form Filled",
      path: "/success",
      formCSS: true,
      productCSS: true,
      activeShop: true,
    });
  };
  