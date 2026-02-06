import React from 'react'

const Navbar = (props) => {
  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-3xl  text-red-500'>E-COMMERCE <br /> <p className='text-xl text-red-800'>ADMIN PANEL</p></h1>
        <button
         onClick={() => {
    localStorage.removeItem("token")
    props.setToken("")
  }}
  
  className='bg-gray-600 text-white px-5 py-2 rounded-full sm:py-2 sm:px-7 sm:text-sm text-xs'>Logout</button>
    </div>
  )
}

export default Navbar