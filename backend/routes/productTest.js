const express = require("express");
const { readAllProductTest, createProductTest, deleteProductTest, updateProductTest } = require("../controllers/productTest");

const router = express.Router();

router.get("/", readAllProductTest)
router.post("/", createProductTest);
router.delete("/", deleteProductTest);
router.put("/", updateProductTest);

module.exports.productTest_router = router;
