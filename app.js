require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

//rest of the packages
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

//db
const connectDB = require("./db/connect");

//middleware import
const notFoundMiddleWare = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//routers import
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const reviewRouter = require("./routes/reviewRoutes");

app.use(express.static("./public"));
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(fileUpload({ useTempFiles: true }));

app.get("/", (req, res) => {
  res.send("e-commerce API");
});
app.get("/api/v1", (req, res) => {
  // console.log(req.cookies);
  console.log(req.signedCookies);
  res.send("e-commerce API");
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
