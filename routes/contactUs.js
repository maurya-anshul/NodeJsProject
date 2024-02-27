const express = require("express");
const path = require("path");

const contactController = require("../controllers/contactUs");
const router = express.Router();

router.get("/contactUs", contactController.getContactUs);

router.post("/success", contactController.postSuccess);
module.exports = router;
