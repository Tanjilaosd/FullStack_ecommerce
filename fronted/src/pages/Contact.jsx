import React from 'react'
import Title from '../components/Title'
import contactImg from '../assets/admin_assests/contact_img.png'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={"CONTACT"} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={contactImg} className='w-full md:max-w-[480px]'  alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>34566 DHAKA , MIRPUR 10</p>
          <p className='text-gray-500'>Tel:+880 1812 345 678 <br /> Email : contact@ecommerce.test</p>
          <p className='font-semibold text-gray-600 text-xl'>Carrers at ecommerce</p>
           <p className='text-gray-500'>Learn more our teams and job opening</p>
           <button className='border-black border px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore job</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact
