const fs = require("fs");
const { Product } = require("../models/product");

async function readAllProduct(req, res) {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch (err) {
        let statusCode = err.statusCode || 500;
        let message = err.message || "Internal Server Error";
        console.error(err.message);
        res.status(statusCode).json({ message });
    }
};

async function readProduct(req, res) {
    try {
        const id = req.query.id;
        const product = await Product.findOne({ _id: id })
        if (!product) {
            throw { statusCode: 404, message: "No information found for this product" };
        }
        res.status(200).json(product);
    }
    catch (err) {
        let statusCode = err.statusCode || 500;
        let message = err.message || "Internal Server Error";
        console.error(err.message);
        res.status(statusCode).json({ message });
    }
};

async function createProduct(req, res) {
    try {
        const { name, price } = req.body;
        const image_product = req.file;
        if (!name || !price || !image_product) {
            //Fix Bug
            if (image_product) {
                fs.unlinkSync(`./files/product_images/${image_product.filename}`);
            }
            throw { statusCode: 400, message: "Please enter complete information" };
        }

        const newProduct = new Product({
            name,
            price,
            image: image_product.filename
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

async function updateProduct(req, res) {
    try {
        const id = req.query.id;
        const { name, price } = req.body;
        const image_product = req.file;
        
        console.log(name, price, image_product);

        const product = await Product.findOne({ _id: id });
        if (image_product) {
            fs.unlinkSync(`./files/product_images/${product.image}`);
        }

        const updateProduct = {
            name: name || product.name,
            price: price || product.price,
            image: (image_product && image_product.filename) || product.image
        };

        await Product.updateOne({ _id: id }, { $set: updateProduct });

        res.status(200).json({
            message: "Update Successfully",
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

async function deleteProduct(req, res) {
    try {
        const id = req.query.id;
        const product = await Product.findOne({ _id: id });
        fs.unlinkSync(`./files/product_images/${product.image}`);
        await Product.deleteOne({ _id: id });
        res.status(200).json({
            message: "Delete Successfully",
        });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ message: err.message });
    }
};


module.exports = { readAllProduct, readProduct, createProduct, updateProduct, deleteProduct }