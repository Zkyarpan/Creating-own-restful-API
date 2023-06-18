const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const myData = await Product.find(req.query).sort("price");
  
  // To Add Pagination
  // let page =Number(req.query.page) || 1;
  // let limit = Number(req.query.limit) || 3;
  // let skip = (page -1) * limit
  // apiData = apiData.skip(skip).limit(limit)
  res.status(200).json({ myData });

};
const getAllProductsTesting = async (req, res) => {
  res
    .status(200)
    .json({ msg: "I am getting all products from getAllProductsTesting" });
};

module.exports = { getAllProducts, getAllProductsTesting };
