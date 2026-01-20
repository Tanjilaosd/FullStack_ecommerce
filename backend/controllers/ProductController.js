// funtion for add product
import {v2 as cloudinary} from 'cloudinary'
import upload from './../middleware/multer.js';
import productModel from './../models/productModel.js';



 const addProduct = async (req, res) => {
    try {
        console.log("Request Body:", req.body);
        console.log("Request Files:", req.files);

        const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

        if (!name || !description || !price) {
            return res.status(400).json({ success: false, message: "All fields required" });
        }

        // Convert req.files object to array
        const images = [
            req.files.image1?.[0],
            req.files.image2?.[0],
            req.files.image3?.[0],
            req.files.image4?.[0]
        ].filter(Boolean); // remove undefined

        // Upload images to Cloudinary
        const imageUrls = await Promise.all(
            images.map(file => cloudinary.uploader.upload(file.path)
                .then(result => result.secure_url))
        );

        // Controller


        const productData = {
            name: name.trim(),
            description: description.trim(),
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestSeller: bestSeller === "true",
            image: imageUrls,
            date: Date.now()
        };

        const product = new productModel(productData);
        await product.save();

        res.json({ success: true, message: "Product added successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Product add failed", error });
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