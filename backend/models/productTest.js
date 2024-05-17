const mongoose = require("mongoose");

const productTestSchema = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    detail: {
        type: String
    }
});

const ProductTest = mongoose.model("productTests", productTestSchema);

module.exports.ProductTest = ProductTest;