import React from 'react'
import Title from "../components/Title"
import aboutImg from '../assets/admin_assests/about_img.png'
import NewsLetterBox from './../components/NewsLetterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
    <Title text1={'ABOUT'} text2={'US'}/>
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img src={aboutImg} className='w-full md:max-w-[450px]' alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p>Welcome to our online store, where quality meets affordability. We offer a wide range of products including fashion, electronics, home essentials, and accessories</p>
      <p>
        This product is made from high-quality materials to ensure durability and comfort. It features a modern design suitable for daily use. Perfect for all occasions,
      </p>
      <b className='text-gray-800'>Our Mission</b>
      <p>Our mission is to provide customers with a seamless, reliable, and enjoyable online shopping experience by offering high-quality products, competitive prices, and excellent customer service.</p>

      </div>

    </div>
    <div className='text-xl py-4'>
      <Title text1={'Why'} text2={"CHOOSE US"}/>
    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20 gap-4'>
      <div className='border px-10 md:px-16 py-8 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        We aim to build long-term trust through innovation, transparency, and customer satisfaction.
      </div>
       <div className='border px-10 md:px-16 py-8 flex flex-col gap-5'>
        <b>Convenience:</b>
       Perfect for all occasions, this item combines style and functionality at an affordable price.
      </div>
    </div>
    <div>
      <NewsLetterBox/>
    </div>
    </div>
   
  )
}

export default About