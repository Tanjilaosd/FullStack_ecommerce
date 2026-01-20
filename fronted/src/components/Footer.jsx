import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid sm:grid-cols-3  gap-14 my-10 mt-40 text-sm'>
            <div>
              <p className='text-3xl w-32 font-bold'>LOGO</p>
              <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ipsam, explicabo dignissimos cumque architecto, vel quas modi ullam ea s</p>

            </div>
            <div>
                <p className='text-xl font-medium mb-4'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                   <li>About us</li>
                   <li>Delivery</li>
                   <li>Privecy policy</li>
                </ul>
        </div>
      <div>
          <p className='text-xl font-medium mb-5'>Get IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+ 345454-44-44</li>
            <li>Contact@gmail.com</li>

        </ul>
      </div>
     

        </div>
        <hr />
    </div>
  )
}

export default Footer