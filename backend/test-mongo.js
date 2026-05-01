require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

console.log("Testing MongoDB connection...");

mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB connected successfully ✅");
    process.exit(0);
  })
  .catch((err) => {
    console.log("Connection failed ❌", err);
    process.exit(1);
  });