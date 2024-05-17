const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./files/product_images");
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + `.${file.originalname.split(".")[1]}`);
    }
});

exports.upload = multer({storage: storage}).single("file");