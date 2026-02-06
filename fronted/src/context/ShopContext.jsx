
import  axios  from 'axios';
import { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";






 export const ShopContext = createContext()

  export const ShopContextProvider = (props) =>{
    const currency = "$"
    const delivery_fee = 10
    const backURL = import.meta.env.VITE_BACKEND_URL;

    const [search,setSearch] = useState('')
    const [showSearch,setShowSearch] = useState(false)
    const [cartItems,setCartItems] = useState({})
    const [products,setProducts] = useState([]);
    const [token,setToken] = useState('')
    const navigate = useNavigate()

    const addToCart = async (itemId,size) => {
        if(!size){
            toast.error("Select Product size")
            return;
        }




        let cartData = structuredClone(cartItems)


        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;

            }else{
                cartData[itemId][size] = 1 ;
            }
        }
        else{
            cartData[itemId] = {}
            cartData[itemId] [size] = 1
        }
        setCartItems(cartData)
        if(token){
          try {
            await axios.post(backURL + "/api/cart/add",{itemId,size}, {
              headers:{ Authorization: `Bearer ${token}`}
            }
            )
 

          } catch (error) {
            console.log(error)
            toast.error(error.message)
            
          }

        }

    }
   const getCartCount = () => {
  let totalCount = 0;

  for (const items in cartItems) {
    for (const item in cartItems[items]) {
      if (cartItems[items][item] > 0) {
        totalCount += cartItems[items][item];
      }
    }
  }

  return totalCount;
};

const getCartAmount = () => {
  let totalAmount = 0;

  for (const items in cartItems) {
    const itemInfo = products.find(
      (product) => product._id === items
    );

    if (!itemInfo) continue;

    for (const item in cartItems[items]) {
      if (cartItems[items][item] > 0) {
        totalAmount += itemInfo.price * cartItems[items][item];
      }
    }
  }

  return totalAmount;
};






const getProducts = async () => {
  try {
    console.log("Backend URL:", backURL);

    const res = await fetch(backURL + '/api/product/list');
     const response = await res.json();
     if(response.success){
      setProducts(response.products)

     }else{
      toast.error(response.message)
     }
   console.log(response)
    

  } catch (err) {
    console.log("ERROR:", err);
    toast.error(err.message)
  }
};


useEffect(()=>{
  getProducts()
},[])

useEffect(()=>{
  if(!token && localStorage.getItem("token")){
    setToken(localStorage.getItem("token"))
  }

},[])
  

    const value = {
            products,currency,delivery_fee,
            search,setSearch,showSearch,setShowSearch,cartItems,addToCart,getCartCount,getCartAmount,navigate,backURL,token,setToken
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}

        </ShopContext.Provider>
    )
 }