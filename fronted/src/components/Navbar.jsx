import React, { useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import seachIcon from './../assets/admin_assests/search_icon_.png';
import profileIcon from './../assets/admin_assests/profile_icon.png';
import cartIcon from './../assets/admin_assests/cart_icon.png';
import menuIcon from './../assets/admin_assests/menu_icon.png';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch,getCartCount} = useContext(ShopContext)

  return (
    <div className='flex px-5 items-center justify-between py-5 font-medium relative'>
      <Link to='/'><div>Ecommerce</div>
</Link>
      {/* Desktop Menu */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <li>
          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>

        <li>
          <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>

        <li>
          <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>

        <li>
          <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>
      </ul>

      {/* Icons */}
      <div className='flex items-center gap-6'>
        <img onClick={() => setShowSearch(true)} src={seachIcon} alt="" className='w-5 cursor-pointer' />

        {/* Profile Dropdown */}
        <div className="relative group">
          <Link to={'/login'}><img src={profileIcon} className="w-5 cursor-pointer" alt="" /></Link>
          <div className="hidden group-hover:block absolute right-0 pt-4 z-50">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-400 text-gray-900 rounded shadow-lg">
              <p className='cursor-pointer hover:text-black'>My profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link to='/cart' className='relative'>
          <img src={cartIcon} alt="" className='w-5 min-w-5' />
          <p  className='absolute -right-2 -top-1 w-4 text-center bg-black text-white text-xs leading-4 rounded-full'>
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img 
          src={menuIcon} 
          onClick={() => setVisible(true)} 
          className='w-5 cursor-pointer sm:hidden' 
          alt="menu" 
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white overflow-hidden transition-all duration-300 z-40
          ${visible ? "w-64" : "w-0"}`}
      >
        <div className='p-5'>
          <p 
            className='mb-5 cursor-pointer font-bold'
            onClick={() => setVisible(false)}
          >
            Close ✕
          </p>

          <ul className='flex flex-col gap-4 text-gray-700'>
            <Link to='/' onClick={() => setVisible(false)}>Home</Link>
            <Link to='/about' onClick={() => setVisible(false)}>About</Link>
            <Link to='/collection' onClick={() => setVisible(false)}>Collection</Link>
            <Link to='/contact' onClick={() => setVisible(false)}>Contact</Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
