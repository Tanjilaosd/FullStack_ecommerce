// funtion for add product
import {v2 as cloudinary} from 'cloudinary'
import upload from './../middleware/multer.js';
import productModel from './../models/productModel.js';



 const addProduct = async (req, res) => {
  try {
    console.log("BODY 👉", req.body);
    console.log("FILES 👉", req.files);

    const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

    

    const images = [
      req.files?.image1?.[0],
      req.files?.image2?.[0],
      req.files?.image3?.[0],
      req.files?.image4?.[0]
    ].filter(Boolean);

    const imageUrl = images.filter((item)=> item !== undefined)
    


    const imageUrls = await Promise.all(
      imageUrl.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path,{resource_type:"image"})
        return result.secure_url
      })
    )
  

    
    

    const productData = {
      name,
      description, 
      price: Number(price),
      category,
      subCategory,
      sizes: sizes ? JSON.parse(sizes) : [],

      bestSeller: bestSeller === "true" ? true : false,
      image:imageUrls,
      date: Date.now()
    };

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product added successfully" });

  } catch (error) {
    console.log("ADD PRODUCT ERROR ❌", error);
    res.status(500).json({ success: false, message: "Product add failed" });
  }
};



// function for list Product 
const listProduct = async (req,res) => {
    try {
        const products = await productModel.find({})
        res.json({success:true,products})
        
    } catch (error) {
          console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }

}

// function for removing product 
const removeProduct = async (req,res) => {
    try {
         console.log("REQ BODY:", req.body);  // Debug
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product removed"})
    } catch (error) {

          console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }

}

// function for single product info
const singleProduct = async (req,res) => {
   try {
    const {productId} = req.body
    const product = await productModel.findById(productId)
    res.json({success:true,product})
    

    
   } catch (error) {
      console.log(error);
        res.status(500).json({ success: false, message: error.message });
    
   }

}

export {listProduct,removeProduct,addProduct,singleProduct}