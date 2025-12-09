import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/product_freecodechamp";
mongoose.connect(url);
console.log("data base connected successfully")