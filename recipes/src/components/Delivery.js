import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 text-2xl font-bold text-center'>Quick Delivery App</h3>
      <div className='md:w-[1240px] mx-auto md:grid md:grid-cols-2'>
            <img className='my-4 w-[550px] mx-auto' alt='delivery' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'/>
      <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold'>Get the App</p>
        <h1 className='text-2xl md:text-4xl sm:text-3xl font-bold py-2'>Limitless Convenience on-delivery</h1>
        <p>As in any industry, technology can be embraced to improve business practices. Food Delivery is no different. Decision makers in this sector need new solutions that allow them to be more efficient at delivering on time, or handling customers’ expectations if delays occur. Which is where SMS notifications come in! They can, and should, be part of your delivery process to ensure that customers are well-informed with the progress of their delivery.</p>
        <button className='py-3 mx-auto my-6 text-medium rounded-md md:mx-0 w-[200px] bg-black text-[#00df9a]'>Get Started</button>
      </div>
      </div>
    </div>
  )
}

export default Delivery
