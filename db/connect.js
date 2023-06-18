const mongoose = require("mongoose");

// uri = "mongodb+srv://mrarpann22:iYlVrST6K0ByO4zT@cluster0.ahptb5l.mongodb.net/?retryWrites=true&w=majority";

const connectDB = (uri) => {
  console.log("Connected to the database.");
  return mongoose.connect(uri)
}
 

module.exports = connectDB;
