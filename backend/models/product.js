const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    }
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;