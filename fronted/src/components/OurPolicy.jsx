import React from 'react'
import exchage from '../assets/admin_assests/exchange_icon.png'
import quality from '../assets/admin_assests/quality_icon.png'
import suffort from '../assets/admin_assests/support_img.png'




const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-8'>
      <div>
        <img src={exchage} className='w-12 m-auto mb-5 ' alt="" />
        <p className='font-semibold'>Easy exchage policy</p>
        <p className='text-gray-400 '>We offer hassle free exchage policy</p>
      </div>
         <div>
        <img src={quality} className='w-12 m-auto mb-5 ' alt="" />
        <p className='font-semibold'>7 days Return Policy</p>
        <p className='text-gray-400 '>We provided 7 days free return policy</p>
      </div>
        <div>
        <img src={suffort} className='w-12 m-auto mb-5 ' alt="" />
        <p className='font-semibold' >Best custome suffort</p>
        <p className='text-gray-400 '>we provide 24/7 custome support</p>
      </div>
    </div>
  )
}

export default OurPolicy