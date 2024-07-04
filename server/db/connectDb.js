require('dotenv').config();
const mongoose = require('mongoose');
const url = process.env.URL;

const connectDb = async () => {
  try {
    console.log("Connecting to MongoDB");
    await mongoose.connect(url);
    console.log("Mongodb Connected Successfully");
  } catch (err) {
    console.log(err);
    console.log("Not connected to MongoDB");
  }
};

module.exports = { connectDb, mongoose };