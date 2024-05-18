const express = require("express");
const { readAllProduct, readProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/product");
const { auth } = require("../middleware/auth");
const { access } = require("../middleware/access");
const { upload } = require("../middleware/upload");

const router = express.Router();

// http://localhost:8000/api/product/
router.get("/", readAllProduct);

// http://localhost:8000/api/product/?id=
router.get("/", readProduct);

// http://localhost:8000/api/product/
router.post("/", upload, createProduct);

// http://localhost:8000/api/product/?id=
router.put("/", upload, updateProduct);

// http://localhost:8000/api/product/?id=
router.delete("/", deleteProduct);

module.exports.product_router = router;

