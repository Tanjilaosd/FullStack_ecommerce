import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { products } from './../assets/assests';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const {products,currency,cartItems,navigate} = useContext(ShopContext)
  const [cartData,setCartData] = useState([])

 useEffect(() => {
  const temp = [];

  for (const productId in cartItems) {
    for (const size in cartItems[productId]) {
      const qty = cartItems[productId][size];
      if (qty > 0) {
        temp.push({ _id: productId, size, quantity: qty });
      }
    }
  }

  setCartData(temp);
}, [cartItems]);

  return (
    <div className='border-t pt-13 '>
      <div className='text-2xl mb-3'>
        <Title text1={"YOUR"} text2={'CART'}/>
      </div>
     <div>{ cartData.map ((item,index)=>{
      const productData = products.find((product) => product._id === item._id)
      return(
        <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2.5fr_0.5fr] items-center gap-4'>
          <div className='flex items-start gap-6'>
            <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />


          </div>
          <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
          <div className='flex items-center gap-5 mt-2'>
            <p>{currency}{productData.price}</p>
            <p className='px-2 sm:px-3 sm:py-2 border bg-slate-50'>{item.size}</p>
          </div>
             <input type="number" name="" min={1} className='border max-w-10 px-1 sm:px-1 py-1' id="" />
         
        
        </div>
      
        

      )
     })}
     <div className='flex justify-end my-20'>
      <div className='w-full sm:w-[450px]'>
        <CartTotal/>
        <div className='w-full text-end'>
          <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm px-8 py-3'>PROCEED TO CHECKOUT</button>
        </div>
      </div>


     </div>
     
     </div>
  

    </div>
  )
}

export default Cart