const mongoose = require("mongoose");
const connectToDatabase = () => {
  // Connect to data base
  mongoose.connect("mongodb://localhost:27017/Scaler_H", () => {
    console.log("Connected to database");
  });
};
module.exports = connectToDatabase;
