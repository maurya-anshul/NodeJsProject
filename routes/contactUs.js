const express = require("express");
const path = require("path");

const productsController=require('../controllers/products')
const router = express.Router();

router.get("/contactUs", productsController.getContactUs );

router.post("/success",productsController.postSuccess);
module.exports = router;
