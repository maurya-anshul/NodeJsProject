const express = require("express");

const adminController = require("../controllers/admin");
const router = express.Router();

router.get("/add-product", adminController.getAddProduct);

router.get("/admin-product", adminController.adminProducts);

router.post("/add-product", adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditMyProduct);

router.post('/edit-product', adminController.saveModifiedProduct);

router.post('/remove-product', adminController.removeProduct);

module.exports = router;
