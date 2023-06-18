require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");
const ProductJson = require("./product.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.create(ProductJson);
    console.log("Sucessfull..");
  } catch (error) {
    console.log(error);
  }
};

start();
