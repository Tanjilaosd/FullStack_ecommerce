import React from 'react'
import heroIcon from '../assets/admin_assests/hero_img.png'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* hero left side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-gray-600'></p>
                <p className='font-medium text-sm md:text-base'>Our best seller</p>
            </div>
            <h1 className=' prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
            <div className='flex items-center pag-2'>
                <p className='font-semibold text-sm md:text-base'>Shop nn</p>

                <p className='w-8 md:w-11 bg-gray-700 h-[2px] ml-3 '></p>
               
            </div>

        </div>

        </div>
        {/* hero right side */}
        <img className='w-full sm:w-1/2' src={heroIcon} alt="" />
    </div>
  )
}

export default Hero