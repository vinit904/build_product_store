import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  _id : Number,
  name : {
    type : String,
    required : true,
  },
  price:{
    type : String,
    required :true
  },
  image:{
    type : String,
    required : true
  },
  date:String
})


const productModel = mongoose.model('product',productSchema);

export default productModel