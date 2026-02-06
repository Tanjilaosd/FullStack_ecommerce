import userModel from "../models/userModel.js"

// add products to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    // 1️⃣ Find user
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};

    // 2️⃣ If product already exists in cart
    if (cartData[itemId]) {

      // If size exists → increase quantity
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } 
      // If size doesn't exist → set 1
      else {
        cartData[itemId][size] = 1;
      }

    } 
    // 3️⃣ If product not in cart
    else {
      cartData[itemId] = {
        [size]: 1
      };
    }

    // 4️⃣ Update DB
    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Added To Cart" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// update user cart
const updateCart = async (req,res) => {
  try {
    const {userId,itemId,size,quantity} = req.body;
    const userData = await userModel.findById(userId)

    let cartData = await userData.cartData;
    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "cart updated" });


    
  } catch (error) {
     console.log(error);
    res.json({ success: false, message: error.message });
    
  }
    
}

// getUser user cart
const getUserCart = async (req,res) => {
  try {
    const {userId} = req.body;
     const userData = await userModel.findById(userId)

    let cartData = await userData.cartData;
    res.json({success:true, cartData})

  } catch (error) {
     console.log(error);
    res.json({ success: false, message: error.message });
  }
    
}

export {getUserCart,updateCart,addToCart}