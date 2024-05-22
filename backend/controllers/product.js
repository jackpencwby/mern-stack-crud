const fs = require("fs");
const Product = require("../models/product");

async function readAllProduct(req, res) {
    try {
        const products = await Product.find().exec();
        res.status(200).json(products);
    }
    catch (error) {
        const statusCode = error.statusCode || 500;
        const message = error.message || "Internal Server Error";
        console.error(error.message);
        res.status(statusCode).json({ message });
    }
}

async function readProduct(req, res) {
    try {
        const id = req.query.id;
        const product = await Product.findOne({ _id: id }).exec()
        if (!product) {
            throw { statusCode: 404, message: "ไม่พบข้อมูลสินค้านี้" };
        }
        res.status(200).json(product);
    }
    catch (error) {
        const statusCode = error.statusCode || 500;
        const message = error.message || "Internal Server Error";
        console.error(error.message);
        res.status(statusCode).json({ message });
    }
}

async function createProduct(req, res) {
    try {
        const { name, price } = req.body;
        const image_product = req.file;
        if (!name || !price || !image_product) {
            //Fix Bug
            if (image_product) {
                fs.unlinkSync(`./files/product_images/${image_product.filename}`);
            }
            throw { statusCode: 400, message: "กรุณาใส่ข้อมูลให้ครบ" };
        }

        const newProduct = new Product({
            name,
            price,
            image: image_product.filename
        });
        await newProduct.save();

        res.status(201).json({
            message: "Create Successfully"
        });
    }
    catch (error) {
        const statusCode = error.statusCode || 500;
        const message = error.message || "Internal Server Error";
        console.error(error.message);
        res.status(statusCode).json({ message });
    }
}

async function updateProduct(req, res) {
    try {
        const id = req.query.id;
        const { name, price } = req.body;
        const image_product = req.file;

        const product = await Product.findOne({ _id: id }).exec();
        if (image_product) {
            fs.unlinkSync(`./files/product_images/${product.image}`);
        }

        const updateProduct = {
            name: name || product.name,
            price: price || product.price,
            image: (image_product && image_product.filename) || product.image
        };
        await Product.updateOne({ _id: id }, { $set: updateProduct }).exec();

        res.status(200).json({
            message: "Update Successfully",
        });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: error.message
        });
    }
}

async function deleteProduct(req, res) {
    try {
        const id = req.query.id;

        const product = await Product.findOne({ _id: id }).exec();

        fs.unlinkSync(`./files/product_images/${product.image}`);
        await Product.deleteOne({ _id: id });

        res.status(200).json({
            message: "Delete Successfully",
        });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = { readAllProduct, readProduct, createProduct, updateProduct, deleteProduct };