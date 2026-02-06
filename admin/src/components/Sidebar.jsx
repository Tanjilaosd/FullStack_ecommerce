import React from 'react'
import { NavLink } from 'react-router-dom'
import addIcom from '../assets/add_icon.png'
import orderIcon from '../assets/order.png'
import listIcon from '../assets/list.png'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-1 border-gray-500'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
            <NavLink className='flex items-center border gap-3 border-gray-300 border-r-0 px-3 py-2 ' to='/add'>
            <img className='w-5 h-5' src={addIcom} alt="" />
            <p className='hidden md:block'>ADD Items</p>

            </NavLink>
             <NavLink className='flex items-center border gap-3 border-gray-300 border-r-0 px-3 py-2 ' to='/list'>
            <img className='w-6 h-6' src={listIcon} alt="" />
            <p className='hidden md:block'>List Items</p>

            </NavLink>
             <NavLink className='flex items-center border gap-3 border-gray-300 border-r-0 px-3 py-2 ' to='/orders'>
            <img className='w-5 h-5' src={orderIcon} alt="" />
            <p className='hidden md:block'>order Items</p>

            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar