const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectDatabase = require("./config/database");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

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
app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/user", userRouter);
app.use("/api/upload", express.static("./files/product_images"));

app.listen(port, async () => {
    await connectDatabase();
    console.log(`Listening at http://localhost:${port}`);
});



