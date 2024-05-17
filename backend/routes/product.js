const express = require("express");
const { readAllProduct, readProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/product");
const { auth } = require("../middleware/auth");
const { access } = require("../middleware/access");
const { upload } = require("../middleware/upload");

const router = express.Router();

// http://localhost:8000/api/product/
router.get("/allProduct", auth, readAllProduct);

// http://localhost:8000/api/product/?id=
router.get("/", auth, readProduct);

// http://localhost:8000/api/product/
router.post("/", auth, access, upload, createProduct);

// http://localhost:8000/api/product/?id=
router.put("/", auth, access, upload, updateProduct);

// http://localhost:8000/api/product/?id=
router.delete("/", auth, access, deleteProduct);

module.exports.product_router = router;

