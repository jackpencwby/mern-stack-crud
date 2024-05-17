const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { connectDatabase } = require("./config/database");
const { auth_router } = require("./routes/auth");
const { product_router } = require("./routes/product");
const { productTest_router } = require("./routes/productTest");

const app = express();
const port = 8000;

// Security
app.use(morgan("dev"));
app.use(cors({
    credentials: true,
    origin: ['http://localhost:5173']
}));
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", auth_router);
app.use("/api/product", product_router);
app.use("/api/productTest", productTest_router);

app.listen(port, async () => {
    await connectDatabase();
    console.log(`Listening at http://localhost:${port}`);
});



