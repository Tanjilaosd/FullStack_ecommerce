import mongoose from "mongoose"; 
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  subCategory: String,
  sizes: [String],
  bestSeller: Boolean,
  image: [String],
  date: Number
});

const productModel = mongoose.models.product ||  mongoose.model("product",productSchema)

export default productModel
