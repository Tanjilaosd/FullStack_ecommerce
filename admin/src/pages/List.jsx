import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios  from 'axios';
import { backendUrl, currency } from './../App';
import { toast } from 'react-toastify';
import placeholder from "../assets/image2.png";


const List = ({token}) => {
  const [list,setList] = useState([])
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if(response.data.success){

        setList(response.data.products)

      }
      else{
        toast.error(response.data.message)
      }
      // console.log(response.data)
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
      
    }

  }
const removeProduct = async (id) => {
  try {
    const response = await axios.post(
      backendUrl + "/api/product/remove",
      { id }, // request body
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (response.data.success) {
      toast.success(response.data.message);
      await fetchList(); 
    } else {
      toast.error(response.data.message || "Failed to remove product");
    }

  } catch (error) {
    console.log("Remove Product Error:", error);
    toast.error("Something went wrong while removing product");
  }
};


  useEffect(()=>{
    fetchList()
  },[])
  return (
    <div>
      <p className="mb-3">All product List</p>
      <div className="flex flex-col gap-2">
        {/* list table */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm text-center" >
          <b>Image</b> 
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="">Action</b>
        </div>


        {/* -----------------Product list--------------------------- */}
        {list.map((item, index) => (
  <div className='grid grid-cols-[1fr_3fr_1fr]  grid-cols-[1fr_3fr_1fr_1fr_1fr] text-center border gap-2 text-sm' key={index}>
  <img className='w-12' src={item.image?.[0] || "placeholder"} alt={item.name} />

    <p>{item.name}</p>
    <p>{item.category}</p>

    <p>{currency}{item.price}</p>
    <p onClick={()=> removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
  </div>
))}

      </div>

    </div>
  )
}

export default List