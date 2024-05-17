const { ProductTest } = require("../models/productTest");

async function readAllProductTest(req, res) {
    try {
        const products = await ProductTest.find();
        res.status(200).json(products);
    }
    catch (err) {
        let statusCode = err.statusCode || 500;
        let message = err.message || "Internal Server Error";
        console.error(err.message);
        res.status(statusCode).json({ message });
    }
};

async function createProductTest(req, res) {
    try {
        const { name, price, detail } = req.body;
        console.log(name, price, detail)
        if (!name || !price || !detail) {
            throw { statusCode: 400, message: "Please enter complete information" };
        }

        const newProduct = new ProductTest({
            name,
            price,
            detail
        });
        await newProduct.save();

        res.status(201).json({
            message: "Create Successfully",
        });
    }
    catch (err) {
        let statusCode = err.statusCode || 500;
        let message = err.message || "Internal Server Error";
        console.error(err.message);
        res.status(statusCode).json({ message });
    }
};

async function deleteProductTest(req, res) {
    try {
        const id = req.query.id;
        await ProductTest.deleteOne({ _id: id });
        res.status(200).json({
            message: "Delete Successfully",
        });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ message: err.message });
    }
};

async function updateProductTest(req, res) {
    try {
        const id = req.query.id;
        const { name, price, detail } = req.body;

        const product = await ProductTest.findOne({ _id: id });

        const updateProduct = {
            name: name || product.name,
            price: price || product.price,
            detail: detail || product.detail
        };
        await ProductTest.updateOne({ _id: id }, { $set: updateProduct });

        res.status(200).json({
            message: "Update Successfully",
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

module.exports = { readAllProductTest, createProductTest, deleteProductTest, updateProductTest };