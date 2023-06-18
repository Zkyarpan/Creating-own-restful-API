require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const product_routes = require("./routes/products");

const port = process.env.PORT || 5700;

app.get("/", (req, res) => {
  res.send("Hello I am still on Home Page");
});

// middleware or to set routers
app.use("/api/products", product_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`Server is connnected on port no ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
