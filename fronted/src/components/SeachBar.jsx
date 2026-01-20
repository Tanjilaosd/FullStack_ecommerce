import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import searchIcon from '../assets/admin_assests/search_icon_.png'
import cross from '../assets/admin_assests/cross_icon.png'
import { useLocation } from 'react-router-dom'


const SeachBar = () => {
    const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext)
    const [visible,setVisible] = useState(false)
    const location = useLocation()

    
    useEffect(()=>{
      if(location.pathname.includes("collection")){
        setVisible(true)
        
      }else{
        setVisible(false)
      }
    },[location])


  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 my-5
        mx-3 rounded-full w-3/4 sm:w-1/2  '>
            <input type="text" name="" placeholder='search' className='flex-1 outline-none bg-inherit text-sm' value={search} onChange={(e) => setSearch(e.target.value)} id="" />
            <img src={searchIcon} className='w-4 ' alt="" />

        </div>
        <img src={cross} onClick={() => setShowSearch(false)} className='inline w-3 cursor-pointer ' alt="" />



    </div>
  ):null
}

export default SeachBar