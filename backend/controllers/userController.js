import dotenv from "dotenv"; 
dotenv.config(); 
import validator from "validator";
 import bcrypt from "bcrypt";
  import jwt from "jsonwebtoken";
   import userModel from "../models/userModel.js";
   const createToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "24h" }
  );
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;


    


    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    
    

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

  
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword
    });


    const token = createToken(user._id);

    res.status(201).json({
      success: true,
      token,
      message: "User registered successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // field check
  

    // user find
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User does not exist"
      });
    }

    // password match
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    // token
    const token = createToken(user._id);

    res.status(200).json({
      success: true,
      token,
      message: "Login successful"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};



   
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
      const token = jwt.sign(
        { email, role: "admin" },
        process.env.JWT_SECRET_KEY
       
      );

      return res.status(200).json({
        success: true,
        token,
        message: "Admin login successful"
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


export { loginUser, registerUser, adminLogin };